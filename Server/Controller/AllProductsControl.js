import AllProduct from '../Model/AllProductsModel.js'

export const allProducts = async (req, res) => {
    try {
        const { imgSrc, category, title, rating, originalPrice, price } = req.body;
        const findDuplicate = await AllProduct.findOne({ imgSrc });
        if (findDuplicate) return res.status(304).json({ message: "Item already exist", success: false });
        const Items = await AllProduct.find({});
        console.log(Items);
        await AllProduct.create({
            imgSrc, category, title, rating, originalPrice, price
        })
        return res.status(201).json({ message: "Item added successfully", success: true });

    } catch (error) {
        res.status(404)
        throw new Error('Server error')
    }
}