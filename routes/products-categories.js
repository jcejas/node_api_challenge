import { Router } from "express";
import { productsCategoriesController } from "../controllers/products-categories.js";
import { productsCategoriesValidator } from "../validators/products-categories.js"; //Middleware
import { authController } from "../controllers/auth.js";

const router = Router();

router.use(authController.verifyToken) //Auth Middleware

router.get('/', productsCategoriesController.getCategories);

router.get('/:id', productsCategoriesController.getCategoryById);

router.post('/', productsCategoriesValidator.createCategoryValidator, productsCategoriesController.createCategory);

router.put('/:id', productsCategoriesValidator.updateCategoryValidator, productsCategoriesController.updateCategory);

router.delete('/:id', productsCategoriesValidator.deleteCategoryValidator, productsCategoriesController.deleteCategory);

export { router };