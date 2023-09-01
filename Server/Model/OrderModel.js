import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        address: Object,
        orderItems: Array,
        amount: Number,
        Payment: String,
        refId: String,
        Date: String,
    },
    { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
