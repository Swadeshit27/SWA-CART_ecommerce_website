import { AiFillStar } from "react-icons/ai";

const AddToCartITems = ({ data }) => {
    const { title, qty, colors, rating, originalPrice, price } = data;
    return (
        <>
            <h4 className="font-semibold text-xl md:text-lg   w-full  truncate text-black_700 dark:text-white_700">
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
                    ({Math.floor(Math.random() * 1000)})
                </p>
            </div>
            <div className="flex">
                <p className=" text-black_900 dark:text-white_900  font-semibold pe-3 text-lg">
                    ₹{price*qty}
                </p>
                <p className=" text-black_100 dark:text-white_100 font-semibold pe-3 text-lg line-through">
                    ₹{originalPrice*qty}
                </p>
                <p className="text-green-600 font-semibold text-lg">
                    {Math.floor(((originalPrice - price)*qty) / 100)}% off
                </p>
            </div>
            {price*qty >= 500 ? (
                <p className="text-black_700 dark:text-white_700">Free delivery</p>
            ) : (
                <p className="text-black_700 dark:text-white_700">
                    Delivery charge ₹50
                </p>
            )}
        </>
    );
};

export default AddToCartITems;
