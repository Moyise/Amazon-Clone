import { Request, Response } from "express";
import Order from "../models/orderModel";

// @desc Get all orders
// @route GET /api/orders
// @access Private/Admin

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate("user", "id name");

    res.json(orders);
  } catch (error) {
    res.status(404).json({ message: "No orders" });
  }
};

// @desc Create new order
// @route POST /api/orders
// @access Private

export const addOrderItems = async (req: Request, res: Response) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      TBC,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      throw new Error();
    } else {
      const order = new Order({
        user: req.body.user._id,
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        TBC,
      });

      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  } catch (error) {
    res.status(400).json({ message: "No order items" });
  }
};

// @desc Get order by ID
// @route GET /api/orders/:id
// @access Private

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "name email");

    if (order) {
      res.json(order);
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).json({ message: "Order not found" });
  }
};

// @desc Update order to paid
// @route GET /api/orders/:id/pay
// @access Private

export const updateOrderToPaid = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);

    const email_address = req.body.payer ? req.body.payer.email_address : "";

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        email_address,
        email_address2: req.body.receipt_email,
      };

      const updatedOrder = order.save();
      res.json(updatedOrder);
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).json({ message: "Payment Failed" });
  }
};

// @desc Update order to delivered
// @route POST /api/orders/:id/deliver
// @access Private/Admin

export const updateOrderToDelivered = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = order.save();
      res.json(updatedOrder);
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).json({ message: "Deliver error" });
  }
};

// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access Private

export const getMyOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({ user: req.body.user._id });

    res.json(orders);
  } catch (error) {
    res.status(404).json({ message: "No orders" });
  }
};
