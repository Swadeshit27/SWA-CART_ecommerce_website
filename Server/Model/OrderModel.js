import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        address: Object,
        orderItems: Array,
        amount: Number,
        Payment: String,
        PaymentOrderId: String,
        paymentId: String,
    },
    { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
