import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";
import { validateRole } from "../helpers/handleValidators.js";

const productValidator = {};

productValidator.createProductValidator = [
  check("name").exists().notEmpty().isLength({ min: 5, max: 100 }),
  check("price").exists().isFloat(),
  check("description").optional().isString().isLength({max: 255}),
  check("category_id").exists().isInt(),
  check("stock").exists().isInt(),
  (req, res, next) => validateRole('admin', req, res, next),
  (req, res, next) => validateResults(req, res, next)
];

productValidator.updateProductValidator = [
  check("name").exists().notEmpty().isLength({ min: 5, max: 100 }),
  check("price").optional().isFloat(),
  check("description").optional().isString().isLength({max: 255}),
  check("category_id").optional().isInt(),
  check("stock").optional().isInt(),
  (req, res, next) => validateRole('admin', req, res, next),
  (req, res, next) => validateResults(req, res, next)
];

productValidator.deleteProductValidator = (req, res, next) => validateRole('admin', req, res, next);

export { productValidator };