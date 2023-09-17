import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";

const OrderHistoryContainer = ({ data, id, date, orderId, paymentId }) => {
    const {
        title,
        colors,
        imgSrc,
        rating,
        qty,
        price,
        originalPrice,
        category,
    } = data;
    const newDate = new Date(date).toLocaleDateString();
    const newTime = new Date(date).toLocaleTimeString();
    return (
        <div className="w-full max-w-[1400px] mx-auto my-4 sm:p-4">
            <div className="w-full min-h-20 bg_primary max-sm:rounded-none flex flex-col md:flex-row p-8">
                <div className="flex md:w-[50%]">
                    <img src={imgSrc} alt="" className="min-w-24 h-16 object-contain me-4" />
                    <div>
                        <h5 className=" font-semibold   w-[80%] ">
                            {title}
                        </h5>
                        {/* <p className="text-dark_100 dark:text-white_100 text-sm">'nice' </p> */}
                        <h3 className="font-semibold"> ₹{price}</h3>
                    </div>
                </div>
                <div className="md:w-[50%] ps-4">
                    <p >
                        Order Id: {orderId}
                    </p>
                    <p >
                        Payment Id: {paymentId}
                    </p>
                    <p className=" font-semibold">
                        Order at: {newDate} {newTime}
                    </p>
                    <div className="flex items-center text-lg font-semibold text-black_900 dark:text-white_900">
                        <AiFillCheckCircle className="text-green-600 me-2" />Payment successful
                    </div>
                    <div className="flex items-center text-lg font-semibold text-black_900 dark:text-white_900">
                        <AiFillCheckCircle className="text-green-600 me-2" /> Delivered with in 7 days
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHistoryContainer
