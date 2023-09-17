import AddToCartModel from "../Model/AddToCartModel.js";
import User from "../Model/UserModel.js";

/************************************* Address Section **********************************************************/
// Add new address
export const AddressControl = async (req, res) => {
    try {
        const { email, address } = req.body;
        const findUser = await User.findOne({ email });
        findUser.addressList.push(address);
        const updateData = await User.findByIdAndUpdate(findUser._id, { addressList: findUser.addressList }, { new: true });
        res.status(201).json({ data: updateData, message: "update address" });
    } catch (error) {
        res.status(404)
        throw error('Address not added')
    }
}
// update  address
export const UpdateAddress = async (req, res) => {
    try {
        const { email, address } = req.body;
        const findUser = await User.findOne({ email });
        const index = findUser.addressList.findIndex(items => items.id === address.id);
        findUser.addressList[index] = address;
        const updateData = await User.findByIdAndUpdate(findUser._id, { addressList: findUser.addressList }, { new: true });
        res.status(201).json({ data: updateData, message: "update address" });
    } catch (error) {
        // console.log(error);
        res.status(404)
        console.log('Address not added')
    }
}

// delete address
export const DeleteAddress = async (req, res) => {
    try {
        const { email, id } = req.body;
        const findUser = await User.findOne({ email });
        const UpdatedList = findUser.addressList.filter(list => list.id !== id);
        const updateData = await User.findByIdAndUpdate(findUser._id, { addressList: UpdatedList }, { new: true });
        res.status(201).json({ data: updateData, message: "update address" });
    } catch (error) {
        res.status(404)
        console.log('Address not added')
    }
}

/******************************************* Product section ************************************************************** */
export const AddToCart = async (req, res) => {
    try {
        const { email, Items, LaterItems } = req.body;
        const CartItems = await AddToCartModel.create({
            cartItems: Items,
            saveLaterItems: LaterItems
        })
        const findUser = await User.findOne({ email });
        findUser.cartItems.push(CartItems);
        const cartItems = await User.findByIdAndUpdate(findUser._id, { cartItems: findUser.cartItems }, { new: true });
        console.log(cartItems)
        res.status(201).json(cartItems);
    } catch (error) {
        res.status(404);
        throw error('Items not saved')
    }
}

export const OrderHistory = async (req, res) => {
    try {
        const { email } = req.body;
        const { orderHistory } = await User.findOne({ email });
        res.status(200).json(orderHistory);
    } catch (error) {
        res.status(404)
        throw new Error('order not found');
    }
}