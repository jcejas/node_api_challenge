import { matchedData } from "express-validator";
import { userService } from "../services/users.js";
import { uploadFile } from "../config/cloudinary.js";

const userController = {};


userController.getUsers = (req, res) => {
    
    userService.findUsersService()
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message: error.message.replace(/\n/g, '')}));
}

userController.getUserById = (req, res) => {

    userService.findUsersService(req.params.id)
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message: error.message.replace(/\n/g, '')}));
}

userController.createUser = async (req, res) => {

    let body = matchedData(req);

    if (req.files?.image) {

        let result = await uploadFile(req.files.image.tempFilePath);

        //cancel insert
        if (!result.success) {
            return res.status(400).json({message: result.message});
        }

        body.url_image = result.url;
    }

    userService.createUserService(body)
    .then((user) => {
        res.json({ user });
    })
    .catch((error) => res.status(400).json({message: error.message.replace(/\n/g, '')}));
}


userController.updateUser = async (req, res) => {

    let body = matchedData(req);

    if (req.files?.image) {

        let result = await uploadFile(req.files.image.tempFilePath);

        //cancel insert
        if (!result.success) {
            return res.status(400).json({message: result.message});
        }
        
        body.url_image = result.url;
    }
    
    userService.updateUserService(req.params.id, body)
    .then((user) => {
        res.json({ user });
    })
    .catch((error) => res.status(400).json({message: error.message.replace(/\n/g, '')}));
}


userController.deleteUser = (req, res) => {

    userService.deleteUserService(req.params.id)
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message: error.message.replace(/\n/g, '')}));
}

export { userController };