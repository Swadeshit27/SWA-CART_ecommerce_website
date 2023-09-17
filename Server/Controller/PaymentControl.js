import OrderModel from "../Model/OrderModel.js";
import User from "../Model/UserModel.js";
import { instance } from "../index.js";
import crypto from "crypto";

export const checkout = async (req, res) => {
    const { email, finalPrice } = req.body;
    const { address, orderItems } = req.body.value;
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
    await User.findByIdAndUpdate(findUser._id, { orderHistory: findUser.orderHistory }, { new: true });
    instance.orders.create(options, (error, order) => {
        if (error) {
            res.status(500).json({
                success: false,
                message: 'server error'
            });
        }
        else {
            res.status(200).json({
                success: true,
                order, orderData
            });
        }
    });
};

export const paymentVerification = async (req, res) => {
    const { _id } = req.body.orderData;
    const { email } = req.body;
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body.res;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
        .update(body.toString())
        .digest("hex");
    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        const findOrder = await OrderModel.findByIdAndUpdate(_id, { PaymentOrderId: razorpay_order_id, paymentId: razorpay_payment_id, Payment: true }, { new: true });
        const findUser = await User.findOne({ email });
        const index = findUser.orderHistory.findIndex(items => items._id.toString() === _id);
        findUser.orderHistory[index] = findOrder;
        await User.findByIdAndUpdate(findUser._id, { orderHistory: findUser.orderHistory }, { new: true });
        res.status(200).json({ success: true, paymentId: razorpay_payment_id });
    } else {
        res.status(400).json({
            success: false,
        });
    }
};

export const OrderHistory = async (req, res) => {
    try {
        const { email } = req.body;
        const orderData = await User.findOne({ email }).sort({ updatedAt: -1 })
        res.status(200).json(orderData);
    } catch (error) {
        res.status(404)
        throw error('order not found');
    }
}