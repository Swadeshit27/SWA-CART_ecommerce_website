import User from "../Model/UserModel.js";

export const AddressControl = async (req, res) => {
    try {
        const { email, address } = req.body;
        console.log(email, address)
        const findUser = await User.findOne({ email });
        console.log(findUser);
        findUser.addressList.push(address);
        const updateData = await User.findByIdAndUpdate(findUser._id, { addressList: findUser.addressList }, { new: true });
        console.log(updateData);
        res.status(201).json({ data: updateData, message: "update address" });
    } catch (error) {
        console.log(error);
        res.status(404).json('Internal error')
    }
}