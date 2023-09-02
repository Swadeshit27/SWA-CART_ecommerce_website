import OrderModel from "../Model/OrderModel.js";
import User from "../Model/UserModel.js";
import { instance } from "../index.js";
import crypto from "crypto";
// import { Payment } from "../models/paymentModel.js";

export const checkout = async (req, res) => {
    const { email, data } = req.body;
    const { address, finalPrice, orderItems } = req.body.value;
    const options = {
        amount: Number(finalPrice * 100),
        currency: "INR",
    };
    const orderData = await OrderModel.create({
        address,
        amount: finalPrice,
        orderItems
    })
    const findUser = await User.findOne({ email });
    findUser.orderHistory.push(orderData);
    const updateData = await User.findByIdAndUpdate(findUser._id, { orderHistory: findUser.orderHistory }, { new: true });
    const order = await instance.orders.create(options);
    res.status(200).json({
        success: true,
        order, id: orderData._id
    });
};

export const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
        .update(body.toString())
        .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        // console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature)
        // Database comes here

        // await Payment.create({
        //     razorpay_order_id,
        //     razorpay_payment_id,
        //     razorpay_signature,
        // });

        res.redirect(
            `https://totalitycorp-frontend-challenge-phi.vercel.app/success`
        );
    } else {
        res.status(400).json({
            success: false,
        });
    }
};

export const OrderHistory = async (req, res) => {
    try {
        const { email } = req.body;
        const orderData = await User.findOne({ email });
        res.status(200).json(orderData);
    } catch (error) {
        res.status(404)
        throw error('order not found');
    }
}
