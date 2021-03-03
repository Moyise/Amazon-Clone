import express from "express";
import { stripePay } from "../controllers/paymentController";

const router = express.Router();

router.route("/").post(stripePay);

export default router;
