import { Router } from "express";
import { authController } from "../controllers/auth.js";
import { authValidator } from "../validators/auth.js"; //Middleware

const router = Router();

router.post('/login', authValidator.loginValidator, authController.login);

export { router };