import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";
import { validateRole } from "../helpers/handleValidators.js";

const orderDetailValidator = {};

orderDetailValidator.createOrderDetailValidator = [
  check("order_id").exists().isInt(),
  check("product_id").exists().isInt(),
  check("price").exists().isFloat(),
  check("quantity").exists().isInt(),
  (req, res, next) => validateRole('customer', req, res, next),
  (req, res, next) => validateResults(req, res, next)
];

orderDetailValidator.updateOrderDetailValidator = [
  check("order_id").optional().isInt(),
  check("product_id").optional().isInt(),
  check("price").optional().isFloat(),
  check("quantity").optional().isInt(),
  (req, res, next) => validateRole('customer', req, res, next),
  (req, res, next) => validateResults(req, res, next)
];

export { orderDetailValidator };