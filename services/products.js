import prisma from '../config/prisma.js';

const productService = {};

productService.findProductsService = async (id = 0) => {
    if (id != 0) {
        return await prisma.products.findUnique({
            where: {
                id: parseInt(id),
            }
        });
    }
    return await prisma.products.findMany();
}

productService.createProductService = async (body) => {
   
    body = parseBody(body);
    return await prisma.products.create(
        {
            data: body
        }
    );
}

productService.updateProductService = async (id, body) => {
    
    body = parseBody(body);
    return await prisma.products.update({
        where: {
            id: parseInt(id)
        },
        data: body
    });
}

productService.deleteProductService = async (id) => {
    return await prisma.products.delete({
        where: {
            id: parseInt(id)
        }
    });
}

function parseBody(body) {
    if (body?.price) {
        body.price = parseFloat(body.price);
    }
    if (body?.category_id) {
        body.category_id = parseInt(body.category_id);
    }
    if (body?.stock) {
        body.stock = parseInt(body.stock);
    }

    return body;
}

export { productService };