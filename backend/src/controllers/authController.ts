import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

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

// Generate reset Token
const generateResetToken = () => crypto.randomBytes(20).toString("hex");

// Send email reset
const sendResetEmail = async (email: string, resetToken: string) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: email,
		subject: "Password Reset Request",
		html: `<p>You requested a password reset.</p>
			<p>Click <a href="${process.env.CLIENT_URL}/recovery-password?token=${resetToken}">here</a> to reset your password.</p>`,
	};

	await transporter.sendMail(mailOptions);
};

const requestPasswordReset = async (req: Request, res: Response) => {
	const { emailOrUsername } = req.body;

	try {
		const user = await User.findOne({
			$or: [{ email: emailOrUsername }, { username: emailOrUsername }],
		});

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const resetToken = generateResetToken();
		user.resetPasswordToken = resetToken;
		user.resetPasswordExpires = new Date(Date.now() + 3600000);
		await user.save();

		await sendResetEmail(user.email, resetToken);
		res.status(200).json({ message: "Password reset email sent." });
	} catch (error) {
		res.status(500).json({ message: "Error requesting password reset" });
	}
};

const resetPassword = async (req: Request, res: Response) => {
	const { token, newPassword } = req.body;

	try {
		const user = await User.findOne({
			resetPasswordToken: token,
			resetPasswordExpires: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ message: "Invalid or expired token" });
		}

		user.password = await bcrypt.hash(newPassword, 10);
		user.resetPasswordToken = undefined;
		user.resetPasswordExpires = undefined;
		await user.save();

		res.status(200).json({ message: "Password successfully reset." });
	} catch (error) {
		res.status(500).json({ message: "Error resetting password" });
	}
};

export { register, login, requestPasswordReset, resetPassword };
