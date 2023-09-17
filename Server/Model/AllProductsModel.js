import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema(
    {
            imgSrc: String,
            category: String,
            title: String,
            rating: Number,
            originalPrice: Number,
            price: Number,
    }
);

export default mongoose.model("AllProduct", ProductsSchema);
