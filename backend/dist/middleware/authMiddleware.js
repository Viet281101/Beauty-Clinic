"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdmin = exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log("Authorization Header:", authHeader);
    const token = authHeader?.replace("Bearer", "").trim();
    // const token = authHeader && authHeader.split(" ")[1];
    // console.log("Token received:", token);
    if (!token) {
        res.status(401).json({ message: "No token provided" });
        return;
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "defaultsecret", (err, user) => {
        if (err) {
            console.error("JWT Verification Error:", err.message);
            res.status(403).json({ message: "Invalid token" });
            return;
        }
        req.user = user;
        next();
    });
};
exports.authenticateToken = authenticateToken;
const checkAdmin = (req, res, next) => {
    const user = req.user;
    if (!user || user.role !== "admin") {
        res.status(403).json({ message: "Access denied. Admins only." });
        return;
    }
    next();
};
exports.checkAdmin = checkAdmin;
