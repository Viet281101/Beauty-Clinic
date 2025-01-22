import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
	const authHeader = req.headers.authorization;
	// console.log("Authorization Header:", authHeader);
	const token = authHeader?.replace("Bearer", "").trim();
	// const token = authHeader && authHeader.split(" ")[1];
	// console.log("Token received:", token);

	if (!token) {
		res.status(401).json({ message: "No token provided" });
		return;
	}

	jwt.verify(token, process.env.JWT_SECRET || "defaultsecret", (err, user) => {
		if (err) {
			console.error("JWT Verification Error:", err.message);
			res.status(403).json({ message: "Invalid token" });
			return;
		}
		(req as any).user = user;
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

