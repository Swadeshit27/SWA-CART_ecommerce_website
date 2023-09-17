
import express from "express";
import { CreateOtp, forgetPassword, login, otpVerification } from "../Controller/UserControler.js";
const router = express.Router();

router.get("/getKey", (req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
router.post('/login', login);
router.post('/otp', CreateOtp);
router.post('/otp/verification', otpVerification);
router.post('/forget', forgetPassword);

export default router;