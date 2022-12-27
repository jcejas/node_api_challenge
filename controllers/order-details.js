import { matchedData } from "express-validator";
import { orderDetailService } from "../services/order-details.js";

const orderDetailController = {};


orderDetailController.getOrderDetailDetails = (req, res) => {

    orderDetailService.findOrderDetailDetailsService()
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}

orderDetailController.getOrderDetailById = (req, res) => {

    orderDetailService.findOrderDetailDetailsService(req.params.id)
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}

orderDetailController.createOrderDetail = (req, res) => {

    let body = matchedData(req);

    orderDetailService.createOrderDetailService(body)
    .then((data) => {
        res.json({ data });
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '').replace(/\n/g, '')}));
}


orderDetailController.updateOrderDetail = (req, res) => {

    let body = matchedData(req);

    orderDetailService.updateOrderDetailService(req.params.id, body)
    .then((user) => {
        res.json({ user });
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}


orderDetailController.deleteOrderDetail = (req, res) => {

    orderDetailService.deleteOrderDetailService(req.params.id)
    .then((data) => {
        res.json({data});
    })
    .catch((error) => res.status(400).json({message:error.message.replace(/\n/g, '')}));
}

export { orderDetailController };