import { AiFillStar } from "react-icons/ai";

const AddToCartITems = ({ data }) => {
    const { title, qty, colors, rating, originalPrice, price, review } = data;
    return (
        <>
            <h4 className="font-semibold w-full  truncate ">
                {title}
            </h4>
            {/* <p className="  text-xl md:text-sm w-full text-black_300  dark:text-white-100 dark:text-white_100">
                {colors[0]}
            </p> */}
            <div className="flex my-2">
                <div className=" py-1 text-sm font-bold text-white bg-green-600 flex justify-center items-center w-16 rounded-md ">
                    {rating} <AiFillStar className="ms-2" />
                </div>
                <p className=" dark:text-white-300 ps-2 text-black_300 dark:text-white_300  ">
                    ({review})
                </p>
            </div>
            <div className="flex">
                <p className=" text-black_900 dark:text-white_900  font-semibold pe-3 text-lg">
                    ₹{price * qty}
                </p>
                <p className="  font-semibold pe-3  line-through">
                    ₹{originalPrice * qty}
                </p>
                <h6 className="text-green-600 font-semibold text-lg">
                    {Math.floor((originalPrice - price)*100 / originalPrice)}% off
                </h6>
            </div>
            {price * qty >= 500 ? (
                <p >Free delivery</p>
            ) : (
                <p >
                    Delivery charge ₹50
                </p>
            )}
        </>
    );
};

export default AddToCartITems;
 