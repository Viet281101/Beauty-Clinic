import express, { Router, RequestHandler, Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { register, login } from "../controllers/authController";
import { authenticateToken, checkAdmin } from "../middleware/authMiddleware";
import User from "../models/User";

const router: Router = Router();

const asyncHandlerWrapper = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>): RequestHandler => {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};
};

router.post("/register", asyncHandlerWrapper(register));
router.post("/login", asyncHandlerWrapper(login));

router.get(
	"/users/:username",
	authenticateToken,
	asyncHandlerWrapper(async (req: express.Request, res: express.Response) => {
		const { username } = req.params;
		console.log("Fetching user:", username);

		try {
			const user = await User.findOne({ username }).select("-password");
			if (!user) {
				console.log("User not found");
				res.status(404).json({ message: "User not found" });
				return;
			}

			console.log("User found:", user);
			res.status(200).json({ user });
		} catch (error) {
			console.error("Error fetching user:", error);
			res.status(500).json({ message: "Server error" });
		}
	})
);

router.get(
	"/users",
	authenticateToken,
	checkAdmin,
	asyncHandlerWrapper(async (req: express.Request, res: express.Response) => {
		try {
			const users = await User.find().select("-password");
			res.status(200).json({ users });
		} catch (error) {
			console.error("Error fetching users:", error);
			res.status(500).json({ message: "Server error" });
		}
	})
);

router.post(
	"/users",
	authenticateToken,
	checkAdmin,
	asyncHandlerWrapper(async (req: express.Request, res: express.Response) => {
		const { name, username, email, password, role } = req.body;

		try {
			// Check if the user already exists
			const existingUser = await User.findOne({ email });
			if (existingUser) {
				return res.status(400).json({ message: "User already exists" });
			}

			// Hash the password
			const hashedPassword = await bcrypt.hash(password, 10);

			// Create a new user
			const newUser = new User({
				name,
				username,
				email,
				password: hashedPassword,
				role: role || "user",
			});

			await newUser.save();
			res.status(201).json({ message: "User created successfully", user: newUser });
		} catch (error) {
			console.error("Error creating user:", error);
			res.status(500).json({ message: "Server error" });
		}
	})
);

router.put(
	"/users/:id",
	authenticateToken,
	checkAdmin,
	asyncHandlerWrapper(async (req: express.Request, res: express.Response) => {
		const { id } = req.params;
		const { name, username, email, role } = req.body;

		try {
			const updatedUser = await User.findByIdAndUpdate(
				id,
				{ name, username, email, role },
				{ new: true, runValidators: true }
			);

			if (!updatedUser) {
				return res.status(404).json({ message: "User not found" });
			}

			res.status(200).json({ message: "User updated successfully", user: updatedUser });
		} catch (error) {
			console.error("Error updating user:", error);
			res.status(500).json({ message: "Server error" });
		}
	})
);

router.delete(
	"/users/:id",
	authenticateToken,
	checkAdmin,
	asyncHandlerWrapper(async (req: express.Request, res: express.Response) => {
		const { id } = req.params;

		try {
			const deletedUser = await User.findByIdAndDelete(id);

			if (!deletedUser) {
				return res.status(404).json({ message: "User not found" });
			}

			res.status(200).json({ message: "User deleted successfully" });
		} catch (error) {
			console.error("Error deleting user:", error);
			res.status(500).json({ message: "Server error" });
		}
	})
);

export default router;
