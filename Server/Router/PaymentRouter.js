import express from "express";
import { checkout, paymentVerification} from "../Controller/PaymentControl.js";
const router = express.Router();

router.get("/getKey", (req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
router.route("/checkout").post(checkout);
router.route("/verification").post(paymentVerification);

export default router;