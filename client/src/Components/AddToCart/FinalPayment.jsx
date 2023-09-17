import React from 'react'

const FinalPayment = ({ originalPrice, totalPrice, length, qty }) => {
    
    return (
        <>
            {length ? (
                <>
                    <div className="w-full min-h-[10rem] bg_primary capitalize p-4 max-sm:rounded-none ">
                        <h1 className=" uppercase  font-semibold py-2">
                            price details
                        </h1>
                        <hr />
                        <div className="flex justify-between font-semibold  py-2">
                            <h4>price ({length} items) </h4> <h4>₹{originalPrice}</h4>
                        </div>
                        <div className="flex justify-between   py-2">
                            <p>Discount </p> <p>-₹{originalPrice - totalPrice}</p>
                        </div>
                        <div className="flex justify-between font-semibold  py-2">
                            <p>delivery charges </p>
                            <p>{totalPrice >= 500 ? "Free" : "50"}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold  py-2">
                            <h3>Total amount</h3>
                            <h3>₹{totalPrice >= 500 ? totalPrice : totalPrice + 50}</h3>
                        </div>
                        <hr />
                        <h6 className=" text-sm sm:text-lg text-green-600 py-2">
                            You will save ₹{originalPrice - totalPrice} on this order
                        </h6>
                    </div>
                    <p className="max-sm:ms-4 font-semibold my-4">
                        Delivery with in 7 Days
                    </p>
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default FinalPayment
