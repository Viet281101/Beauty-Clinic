"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const db_1 = __importDefault(require("./config/db"));
const auth_1 = __importDefault(require("./routes/auth"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err.message || err);
    res.status(500).json({ message: "Something went wrong", error: err.message || err });
});
// Connect to MongoDB
(0, db_1.default)();
// Routes
app.get("/", (req, res) => {
    res.send("API is running...");
});
// Mount the routes
app.use("/api/auth", auth_1.default);
// Configure CSP
app.use(helmet_1.default.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
            "'self'",
            "'unsafe-inline'",
            "https://www.google.com",
            "https://www.gstatic.com",
        ],
        frameSrc: ["'self'", "https://www.google.com"],
        imgSrc: ["'self'", "data:", "https://www.gstatic.com"],
    },
}));
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
