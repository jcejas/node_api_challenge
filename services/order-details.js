import prisma from '../config/prisma.js';

const orderDetailService = {};

orderDetailService.findOrderDetailDetailsService = async (id = 0) => {
    if (id != 0) {
        return await prisma.order_details.findUnique({
            where: {
                id: parseInt(id),
            }
        });
    }
    return await prisma.order_details.findMany();
}

orderDetailService.createOrderDetailService = async (body) => {
    return await prisma.order_details.create(
        {
            data: body
        }
    );
    
}

orderDetailService.updateOrderDetailService = async (id, body) => {
    return await prisma.order_details.update({
        where: {
            id: parseInt(id)
        },
        data: body
    });
}

orderDetailService.deleteOrderDetailService = async (id) => {
    return await prisma.order_details.delete({
        where: {
            id: parseInt(id)
        }
    });
}

export { orderDetailService };