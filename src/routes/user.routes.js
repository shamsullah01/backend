// src/routes/user.routes.js
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser); // ✅ POST route exists

export default router;
