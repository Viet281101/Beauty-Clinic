import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db";

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: Function) => {
	console.error("Unhandled Error:", err.message || err);
	res.status(500).json({ message: "Something went wrong", error: err.message || err });
});

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req: Request, res: Response) => {
	res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
