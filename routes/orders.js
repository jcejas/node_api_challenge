import { Router } from "express";
import { orderController } from "../controllers/orders.js";
import { orderValidator } from "../validators/orders.js"; //Middleware
import { authController } from "../controllers/auth.js";

const router = Router();

router.use(authController.verifyToken) //Auth Middleware

router.get('/', orderController.getOrders);

router.get('/:id', orderController.getOrderById);

router.post('/', orderValidator.createOrderValidator, orderController.createOrder);

router.put('/:id', orderValidator.updateOrderValidator, orderController.updateOrder);

router.delete('/:id', orderController.deleteOrder);

export { router };