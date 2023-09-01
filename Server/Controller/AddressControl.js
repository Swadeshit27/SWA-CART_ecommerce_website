import AddToCartModel from "../Model/AddToCartModel.js";
import User from "../Model/UserModel.js";

export const AddressControl = async (req, res) => {
    try {
        const { email, address } = req.body;
        const findUser = await User.findOne({ email });
        findUser.addressList.push(address);
        const updateData = await User.findByIdAndUpdate(findUser._id, { addressList: findUser.addressList }, { new: true });
        res.status(201).json({ data: updateData, message: "update address" });
    } catch (error) {
        // console.log(error);
        res.status(404)
        throw error('Address not added')
    }
}

export const AddToCart = async (req, res) => {
    try {
        const { email, Items, LaterItems } = req.body;
        const CartItems = await AddToCartModel.create({
            cartItems: Items,
            saveLaterItems: LaterItems
        })
        const findUser = await User.findOne({ email });
        findUser.cartItems.push(CartItems);
        const updateData = await User.findByIdAndUpdate(findUser._id, { addressList: findUser.cartItems }, { new: true });

        res.status(201).json({ data: updateData, message: "save cart Items" });
    } catch (error) {
        // console.log(error);
        res.status(404);
        throw error('Items not saved')
    }
}