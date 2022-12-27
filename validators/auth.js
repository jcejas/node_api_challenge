import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";

const authValidator = {};

authValidator.loginValidator = [
  check("email").exists().isEmail(),
  check("password").exists().notEmpty().isString(),
  (req, res, next) => validateResults(req, res, next)
];

export { authValidator };