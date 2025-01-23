import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface DecodedToken {
	id: string;
	username: string;
	role: string;
};

declare global {
	namespace Express {
		interface Request {
			user?: DecodedToken;
		}
	}
};

const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
	const authHeader = req.headers.authorization;
	const token = authHeader?.replace("Bearer", "").trim();

	if (!token) {
		res.status(401).json({ message: "No token provided" });
		return;
	}

	jwt.verify(token, process.env.JWT_SECRET || "defaultsecret", (err, decoded) => {
		if (err) {
			console.error("JWT Verification Error:", err.message);
			res.status(403).json({ message: "Invalid token" });
			return;
		}
		req.user = decoded as DecodedToken;
		console.log("Decoded Token:", req.user);
		next();
	});
};

const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
	const user = (req as any).user;

	if (!user || user.role !== "admin") {
		res.status(403).json({ message: "Access denied. Admins only." });
		return;
	}

	next();
};

export { authenticateToken, checkAdmin };

