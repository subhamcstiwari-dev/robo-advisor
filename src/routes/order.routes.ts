import express from "express";
import { createOrder, fetchOrders } from "../controllers/order.controller";
import { orderValidator } from "../middleware/order.validator";

const router = express.Router();

router.post("/split", orderValidator, createOrder);
router.get("/", fetchOrders);

export default router;