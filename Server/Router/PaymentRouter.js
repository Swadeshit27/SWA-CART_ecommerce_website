import express from "express";
import { OrderHistory, checkout, paymentVerification } from "../Controller/PaymentControl.js";
const router = express.Router();

router.get("/getKey", (req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
router.post("/checkout", checkout); 
router.post("/verification", paymentVerification);
router.post("/order", OrderHistory)
router.get('/hello', (req, res) => {
    console.lgo('hello')
})

export default router;