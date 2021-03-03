import express from "express";
import {
  addOrderItems,
  getOrders,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
} from "../controllers/orderController";
import { admin, protect } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
