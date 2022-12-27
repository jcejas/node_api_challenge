import { Router } from "express";
import { userController } from "../controllers/users.js";
import { userValidator } from "../validators/users.js"; //Middleware
import { authController } from "../controllers/auth.js";

const router = Router();

router.use(authController.verifyToken) //Auth Middleware

router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.post('/', userValidator.createUserValidator, userController.createUser);

router.put('/:id', userValidator.updateUserValidator, userController.updateUser);

router.delete('/:id', userValidator.deleteUserValidator, userController.deleteUser);

export { router };