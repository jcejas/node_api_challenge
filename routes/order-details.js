import { Router } from "express";
import { orderDetailController } from "../controllers/order-details.js";
import { orderDetailValidator } from "../validators/order-details.js"; //Middleware
import { authController } from "../controllers/auth.js";

const router = Router();

router.use(authController.verifyToken) //Auth Middleware

router.get('/', orderDetailController.getOrderDetailDetails);

router.get('/:id', orderDetailController.getOrderDetailById);

router.post('/', orderDetailValidator.createOrderDetailValidator, orderDetailController.createOrderDetail);

router.put('/:id', orderDetailValidator.updateOrderDetailValidator, orderDetailController.updateOrderDetail);

router.delete('/:id', orderDetailController.deleteOrderDetail);

export { router };