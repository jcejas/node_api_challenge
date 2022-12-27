import { matchedData } from "express-validator";
import { userService } from "../services/users.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const authController = {};

authController.login = (req, res) => {
    let body = matchedData(req);

    userService.getUserByEmail(body.email)
    .then((data) => {
        console.log(data);
        if (bcrypt.compareSync(body.password, data.password)) {

            delete data.password; //clear password
            let token = jwt.sign({ userData: data }, process.env.SECRET, { expiresIn: process.env.TOKEN_EXPIRY_TIME });

            res.status(200).json({token});
            return;
        }
        res.status(401).json({message: 'Email o Password incorrectos'});
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}

authController.verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];

    if (typeof token != 'undefined' && token != '') {
        token = token.split(' ')[1]; //Clear 'Bearer'
        try {
            req.userData = jwt.verify(token, process.env.SECRET).userData;
            console.log('>>>>>>>>>>>>> [User Verify] \n', req.userData);
            next();
        } catch (err) {
            console.log(err.message);
            res.status(401).json({message: 'Unauthorized'});
        }
        return;
    }

    res.status(401).json({message: 'Debe ingresar un token valido'});
}

export { authController };