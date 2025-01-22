"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User_1.default.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            console.log("Existing User Found:", existingUser);
            return;
        }
        // Generate unique username
        if (!name || name.trim() === "") {
            res.status(400).json({ message: "Name is required" });
            return;
        }
        let username = name.replace(/\s+/g, "").toLowerCase();
        let duplicateUsername = await User_1.default.findOne({ username });
        let counter = 1;
        while (duplicateUsername) {
            username = `${name.replace(/\s+/g, "").toLowerCase()}${counter}`;
            duplicateUsername = await User_1.default.findOne({ username });
            counter++;
        }
        // Hash the password
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        // Create a new user
        const newUser = new User_1.default({
            name,
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: newUser._id }, process.env.JWT_SECRET || "defaultsecret", { expiresIn: "1h" });
        res.status(201).json({
            message: "User registered successfully",
            token,
            user: { id: newUser._id, name: newUser.name, username: newUser.username, email: newUser.email },
        });
    }
    catch (error) {
        console.error("Error during registration:", error);
        if (error instanceof Error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
        else {
            res.status(500).json({ message: "Server error", error: "Unknown error" });
        }
    }
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await User_1.default.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        // Validate password
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || "defaultsecret", { expiresIn: "1h" });
        res.status(200).json({
            message: "Login successful",
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role, },
        });
    }
    catch (error) {
        console.error("Error during login:", error);
        if (error instanceof Error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
        else {
            res.status(500).json({ message: "Server error", error: "Unknown error" });
        }
    }
};
exports.login = login;
