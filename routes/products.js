import { Router } from "express";
import { productController } from "../controllers/products.js";
import { productValidator } from "../validators/products.js"; //Middleware
import { authController } from "../controllers/auth.js";

const router = Router();

router.use(authController.verifyToken) //Auth Middleware

router.get('/', productController.getProducts);

router.get('/:id', productController.getProductById);

router.post('/', productValidator.createProductValidator, productController.createProduct);

router.put('/:id', productValidator.updateProductValidator, productController.updateProduct);

router.delete('/:id', productValidator.deleteProductValidator, productController.deleteProduct);

export { router };