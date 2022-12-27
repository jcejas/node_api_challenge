import { matchedData } from "express-validator";
import { productService } from "../services/products.js";
import { uploadFile } from "../config/cloudinary.js";

const productController = {};


productController.getProducts = (req, res) => {

    productService.findProductsService()
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}

productController.getProductById = (req, res) => {

    productService.findProductsService(req.params.id)
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}

productController.createProduct = async (req, res) => {

    let body = matchedData(req);

    if (req.files?.image) {

        let result = await uploadFile(req.files.image.tempFilePath);

        //cancel insert
        if (!result.success) {
            return res.status(400).json({message: result.message});
        }
        
        body.url_image = result.url;
    }

    productService.createProductService(body)
    .then((user) => {
        res.json({ user });
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '').replace(/\n/g, '')}));
}


productController.updateProduct = async (req, res) => {

    let body = matchedData(req);

    if (req.files?.image) {

        let result = await uploadFile(req.files.image.tempFilePath);

        //cancel insert
        if (!result.success) {
            return res.status(400).json({message: result.message});
        }
        
        body.url_image = result.url;
    }
    
    productService.updateProductService(req.params.id, body)
    .then((user) => {
        res.json({ user });
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}


productController.deleteProduct = (req, res) => {

    productService.deleteProductService(req.params.id)
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}

export { productController };