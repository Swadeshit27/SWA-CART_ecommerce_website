import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
        cartItems: Array,
        saveLaterItems: Array,
        Date: String,
    },
    { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
