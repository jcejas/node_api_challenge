import prisma from '../config/prisma.js';
//import moment from 'moment';
import moment from 'moment-timezone';


const orderService = {};

orderService.findOrdersService = async (id = 0) => {
    if (id != 0) {
        return await prisma.orders.findUnique({
            where: {
                id: parseInt(id),
            }
        });
    }
    return await prisma.orders.findMany();
}

orderService.createOrderService = async (body) => {
    body.order_date = moment().tz("America/Argentina/Buenos_Aires").format();
    return await prisma.orders.create(
        {
            data: body
        }
    );
    
}

orderService.updateOrderService = async (id, body) => {
    return await prisma.orders.update({
        where: {
            id: parseInt(id)
        },
        data: body
    });
}

orderService.deleteOrderService = async (id) => {
    return await prisma.orders.delete({
        where: {
            id: parseInt(id)
        }
    });
}

export { orderService };