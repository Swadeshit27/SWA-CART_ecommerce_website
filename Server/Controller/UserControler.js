import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import User from "../Model/UserModel.js"

// register user
export const register = async (req, res) => {
    const { name, email, password, mobile } = req.body;
    try {
        const userExist = await User.findOne({ email });
        if (userExist) return res.json({ success: false, message: "User already exist" })
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            name, email, password: passwordHash, photo: req.file.filename, mobile
        })
        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETKEY);
        res.status(201).json({ user, token, success: true, message: "Registration successful" })
    } catch (error) {
        res.status(500).json({ message: error.massage, success: false })
    }
}
// login user
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.json({ message: "user does not exist", success: false });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.json({ message: "Invalid credentials", success: false });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETKEY);
        // delete user.password
        res.status(200).json({ token, user, message: "Log in successful", success: true })
    } catch (error) {
        res.json({ message: error.massage, success: false });
    }
}

// forget Password
export const forgetPassword = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.json({ message: "Email not exist", success: false });
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const updatePassword = await User.findOneAndUpdate({ email }, { password: passwordHash });
        await updatePassword.save();
        // delete user.password
        res.status(200).json({ message: "password update successfully", success: true })
    } catch (error) {
        res.json({ message: error.massage, success: false });
    }
}