import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: Number,
    photo: String,
    addressList: Array,
    cartItems: Array,
    orderHistory: Array,
}, { timestamps: true })

const User = mongoose.model("User", userSchema);
export default User;