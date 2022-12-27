import { matchedData } from "express-validator";
import { orderService } from "../services/orders.js";

const orderController = {};


orderController.getOrders = (req, res) => {

    orderService.findOrdersService()
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}

orderController.getOrderById = (req, res) => {

    orderService.findOrdersService(req.params.id)
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}

orderController.createOrder = (req, res) => {

    let body = matchedData(req);

    orderService.createOrderService(body)
    .then((data) => {
        res.json({ data });
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '').replace(/\n/g, '')}));
}


orderController.updateOrder = (req, res) => {

    let body = matchedData(req);

    orderService.updateOrderService(req.params.id, body)
    .then((user) => {
        res.json({ user });
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}


orderController.deleteOrder = (req, res) => {

    orderService.deleteOrderService(req.params.id)
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}

export { orderController };