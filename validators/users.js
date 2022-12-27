import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";
import { validateRole } from "../helpers/handleValidators.js";

const userValidator = {};

userValidator.createUserValidator = [
  check("email").isEmail(),
  check("password").exists().notEmpty(),
  check("full_name").exists().notEmpty().isLength({ min: 5, max: 100 }),
  check("role").exists().matches(/^admin$|^customer$/g),
  (req, res, next) => validateRole('admin', req, res, next),
  (req, res, next) => validateResults(req, res, next)
];

userValidator.updateUserValidator = [
  check("email").optional().isEmail(),
  check("password").optional().notEmpty(),
  check("full_name").optional().notEmpty().isLength({ min: 5, max: 100 }),
  check("role").optional().matches(/^admin$|^customer$/g),
  (req, res, next) => validateRole('admin', req, res, next),
  (req, res, next) => validateResults(req, res, next)
];

userValidator.deleteUserValidator = (req, res, next) => validateRole('admin', req, res, next);

export { userValidator };