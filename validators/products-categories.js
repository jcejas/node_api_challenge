import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";
import { validateRole } from "../helpers/handleValidators.js";

const productsCategoriesValidator = {};

productsCategoriesValidator.createCategoryValidator = [
  check("name").exists().notEmpty().isLength({ min: 5, max: 150 }),
  check("description").optional().isString().isLength({max: 255}),
  (req, res, next) => validateRole('admin', req, res, next),
  (req, res, next) => validateResults(req, res, next)
];

productsCategoriesValidator.updateCategoryValidator = [
  check("name").optional().notEmpty().isString().isLength({ min: 5, max: 150 }),
  check("description").optional().isString().isLength({max: 255}),
  (req, res, next) => validateRole('admin', req, res, next),
  (req, res, next) => validateResults(req, res, next)
];

productsCategoriesValidator.deleteCategoryValidator = (req, res, next) => validateRole('admin', req, res, next);

export { productsCategoriesValidator };