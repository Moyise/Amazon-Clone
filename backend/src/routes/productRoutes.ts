import express from "express";
import {
  createProductReview,
  getProducts,
  getProductsById,
} from "../controllers/productController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
