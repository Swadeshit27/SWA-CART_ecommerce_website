import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
    {
        name: String,
        mobile: Number,
        pin: Number,
        locality: String,
        fullAddress: String,
        city: String,
        state: String,
        landmark: String,
        altMobile: Number,
    },
    { timestamps: true }
);

const User = mongoose.model("Address", userSchema);
export default User;
