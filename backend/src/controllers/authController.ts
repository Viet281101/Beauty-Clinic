import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

const register = async (req: Request, res: Response): Promise<void> => {
	const { name, email, password } = req.body;

	try {
		// Check if user already exists
		const existingUser = await User.findOne({ email });
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
		let duplicateUsername = await User.findOne({ username });
		let counter = 1;

		while (duplicateUsername) {
			username = `${name.replace(/\s+/g, "").toLowerCase()}${counter}`;
			duplicateUsername = await User.findOne({ username });
			counter++;
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new user
		const newUser = new User({
			name,
			username,
			email,
			password: hashedPassword,
		});

		await newUser.save();

		// Generate JWT token
		const token = jwt.sign(
			{ id: newUser._id },
			process.env.JWT_SECRET || "defaultsecret",
			{ expiresIn: "1h" }
		);

		res.status(201).json({
			message: "User registered successfully",
			token,
			user: { id: newUser._id, name: newUser.name, username: newUser.username, email: newUser.email },
		});
	} catch (error) {
		console.error("Error during registration:", error);
		if (error instanceof Error) {
			res.status(500).json({ message: "Server error", error: (error as Error).message });
		} else {
			res.status(500).json({ message: "Server error", error: "Unknown error" });
		}
	}
};

const login = async (req: Request, res: Response): Promise<void> => {
	const { email, password } = req.body;

	try {
		// Find user by email
		const user = await User.findOne({ email });
		if (!user) {
			res.status(404).json({ message: "User not found" });
			return;
		}

		// Validate password
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			res.status(400).json({ message: "Invalid credentials" });
			return;
		}

		// Generate JWT token
		const token = jwt.sign(
			{ id: user._id, username: user.username, role: user.role },
			process.env.JWT_SECRET || "defaultsecret",
			{ expiresIn: "1h" }
		);

		res.status(200).json({
			message: "Login successful",
			token,
			user: { id: user._id, name: user.name, email: user.email, role: user.role, },
		});
	} catch (error) {
		console.error("Error during login:", error);
		if (error instanceof Error) {
			res.status(500).json({ message: "Server error", error: (error as Error).message });
		} else {
			res.status(500).json({ message: "Server error", error: "Unknown error" });
		}
	}
};

export { register, login };
