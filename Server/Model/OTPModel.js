import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email: String,
    otp: Number
})

const OTP = mongoose.model("otp", otpSchema);
export default OTP;