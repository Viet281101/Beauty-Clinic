import { Router } from "express";
import asyncHandler from "express-async-handler";
import { register, login } from "../controllers/authController";

const router: Router = Router();

router.post("/register", asyncHandler(register));
router.post("/login", asyncHandler(login));

export default router;
