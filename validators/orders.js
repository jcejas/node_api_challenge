import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";
import { validateRole } from "../helpers/handleValidators.js";

const orderValidator = {};

orderValidator.createOrderValidator = [
  check("customer_id").exists().isInt(),
  check("ammount").exists().isFloat(),
  check("order_status").exists().isBoolean([0, 1]),
  (req, res, next) => validateRole('customer', req, res, next),
  (req, res, next) => validateResults(req, res, next)
];

orderValidator.updateOrderValidator = [
  check("customer_id").optional().isInt(),
  check("ammount").optional().isFloat(),
  check("order_status").optional().isBoolean([0, 1]),
  (req, res, next) => validateRole('customer', req, res, next),
  (req, res, next) => validateResults(req, res, next)
];

export { orderValidator };