import { AiFillStar } from "react-icons/ai";

const ProductDetails = ({ data }) => {
    const { title, qty, colors, review, rating, originalPrice, price } = data;
    return (
        <>
            <h4 className="font-semibold  w-full truncate ">
                {title}
            </h4>
            <p className="  md:text-lg text-sm w-full text-black_300  dark:text-white-100 dark:text-white_100">
                white, black
            </p>
            <div className="flex my-2">
                <div className=" py-1 text-sm font-bold text-white bg-green-600 flex justify-center items-center w-16 rounded-md ">
                    {rating} <AiFillStar className="ms-2" />
                </div>
                <p className=" ps-2   ">
                    ({review})
                </p>
            </div>
            <div className="flex">
                <h3 className="  font-semibold pe-3 dark:text-white text-black_900 ">
                    ₹{price}
                </h3>
                <p className="  font-semibold pe-3  line-through">
                    ₹{originalPrice}
                </p>
                <h6 className="text-green-600 font-semibold text-lg">
                    {Math.floor(((originalPrice - price) * 100) / originalPrice)}% off
                </h6>
            </div>
            {price >= 500 ? (
                <p >Free delivery</p>
            ) : (
                <p > Delivery charge ₹50</p>
            )}
        </>
    );
};

export default ProductDetails;
