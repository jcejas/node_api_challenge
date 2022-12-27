import { validationResult } from "express-validator";

export const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(403);
        res.send({errors: error.array()});
    }
};

export const validateRole = (role, req, res, next) => {

    if (typeof req.userData.role != 'undefined' && req.userData.role == role) {
        return next();
    }

    res.status(401).send({message: 'Debe ser ' + role.toUpperCase() + ' para poder realizar esta acción.'});
};