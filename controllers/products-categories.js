import { matchedData } from "express-validator";
import { categoryService } from "../services/products-categories.js";

const productsCategoriesController = {};

productsCategoriesController.getCategories = (req, res) => {

    categoryService.findCategoriesService()
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message: error.message.replace(/\n/g, '')}));
}

productsCategoriesController.getCategoryById = (req, res) => {

    categoryService.findCategoriesService(req.params.id)
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message: error.message.replace(/\n/g, '')}));
}

productsCategoriesController.createCategory = (req, res) => {

    let body = matchedData(req);

    categoryService.createCategoryService(body)
    .then((category) => {
        res.json({ category });
    })
    .catch((error) => res.status(400).json({message: error.message.replace(/\n/g, '')}));
}


productsCategoriesController.updateCategory = (req, res) => {

    let body = matchedData(req);

    categoryService.updateCategoryService(req.params.id, body)
    .then((category) => {
        res.json({ category });
    })
    .catch((error) => res.status(400).json({message: error.message.replace(/\n/g, '')}));
}


productsCategoriesController.deleteCategory = (req, res) => {

    categoryService.deleteCategoryService(req.params.id)
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message: error.message.replace(/\n/g, '')}));
}

export { productsCategoriesController };