import express from "express";
import { AddToCart, OrderHistory } from "../Controller/ProductsControl.js";
const router = express.Router();

router.post("/order", OrderHistory);
router.post("/cart", AddToCart);

export default router;