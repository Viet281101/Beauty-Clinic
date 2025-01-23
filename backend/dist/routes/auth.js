"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const User_1 = __importDefault(require("../models/User"));
const router = (0, express_1.Router)();
const asyncHandlerWrapper = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
router.post("/register", asyncHandlerWrapper(authController_1.register));
router.post("/login", asyncHandlerWrapper(authController_1.login));
router.get("/users/:username", authMiddleware_1.authenticateToken, asyncHandlerWrapper(async (req, res) => {
    const { username } = req.params;
    // console.log("Fetching user:", username);
    try {
        const user = await User_1.default.findOne({ username }).select("-password");
        if (!user) {
            console.log("User not found");
            res.status(404).json({ message: "User not found" });
            return;
        }
        console.log("User found:", user);
        res.status(200).json({ user });
    }
    catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error" });
    }
}));
router.get("/users", authMiddleware_1.authenticateToken, authMiddleware_1.checkAdmin, asyncHandlerWrapper(async (req, res) => {
    try {
        const users = await User_1.default.find().select("-password");
        res.status(200).json({ users });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Server error" });
    }
}));
router.post("/users", authMiddleware_1.authenticateToken, authMiddleware_1.checkAdmin, asyncHandlerWrapper(async (req, res) => {
    const { name, username, email, password, role } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await User_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Hash the password
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        // Create a new user
        const newUser = new User_1.default({
            name,
            username,
            email,
            password: hashedPassword,
            role: role || "user",
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Server error" });
    }
}));
router.put("/users/:id", authMiddleware_1.authenticateToken, authMiddleware_1.checkAdmin, asyncHandlerWrapper(async (req, res) => {
    const { id } = req.params;
    const { name, username, email, role } = req.body;
    try {
        const updatedUser = await User_1.default.findByIdAndUpdate(id, { name, username, email, role }, { new: true, runValidators: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    }
    catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Server error" });
    }
}));
router.delete("/users/:id", authMiddleware_1.authenticateToken, authMiddleware_1.checkAdmin, asyncHandlerWrapper(async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User_1.default.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Server error" });
    }
}));
exports.default = router;
