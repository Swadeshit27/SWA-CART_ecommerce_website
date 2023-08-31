import React, { useState } from "react";
import ProductDetails from "../Components/Products/ProductDetails";
import CartItems from "../Components/Products/CartItems";
import { useSelector } from "react-redux";
import Address from "../Components/Address";
import SaveForLater from "../Components/SaveForLater";

const Cart = () => {
  console.log(useSelector((state) => state));
  const totalPrice = useSelector((state) => state.totalPrice);
  const originalPrice = useSelector((state) => state.originalPrice);
  const Items = useSelector((state) => state.Items);
  const LaterItems = useSelector((state) => state.LaterItems);
  const [address, setAddress] = useState(true);
  return (
    <>
      <div className="w-full xl:h-full max-w-[1400px] mx-auto my-8 flex justify-between p-4 md:p-8 flex-col xl:flex-row">
        {Items.length || LaterItems.length ? (
          <>
            <div className="w-full xl:w-[60%] h-auto xl:min-h-screen overflow-y-scroll">
              {address ? (
                <>
                  {Items.map((val, i) => (
                    <CartItems data={val} key={i} />
                  ))}
                  {LaterItems.length ? (
                    <>
                      <h3 className="w-full text-blue-600 bg-white_900 dark:bg-black_900 py-2 rounded-md shadow-md px-4 font-semibold">
                        Save for Later ({LaterItems.length})
                      </h3>
                      {LaterItems.map((val, i) => (
                        <SaveForLater data={val} key={i} />
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <Address />
              )}
            </div>
            <div className="w-[30%] ">
              <TotalPaymentSec
                originalPrice={originalPrice}
                totalPrice={totalPrice}
                length={Items.length}
              />

              {address ? (
                <button className={Items.length ? "cartBtn" : 'hidden'} onClick={() => setAddress(false)}>
                  Place order
                </button>
              ) : (
                <button className="cartBtn">Make Payment</button>
              )}
            </div>
          </>
        ) : (
          <div className="w-full h-full">
            <img
              src="empty cart.svg"
              alt="empty cart"
              className="w-[50%] h-[50%] object-contain mx-auto"
            />
            <h1 className="text-center opacity-50 ">Sorry, Cart is Empty!</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

const TotalPaymentSec = ({ originalPrice, totalPrice, length }) => {
  return (
    <>
      {length ? (
        <>
          <div className="w-full min-h-[10rem] bg-white_900 dark:bg-black_900 capitalize p-4 rounded-md shadow-md">
            <p className=" uppercase text-black_500 dark:text-white_500 text-2xl font-bold py-2">
              price details
            </p>
            <hr />
            <div className="flex justify-between text-xl font-semibold text-black_900 dark:text-white_900 py-2">
              <p>price ({length} items) </p> <p>₹{originalPrice}</p>
            </div>
            <div className="flex justify-between text-xl font-semibold text-black_100 dark:text-white_100 py-2">
              <p>Discount </p> <p>-₹{originalPrice - totalPrice}</p>
            </div>
            <div className="flex justify-between text-xl font-semibold text-black_100 dark:text-white_100 py-2">
              <p>delivery charges </p>{" "}
              <p>{totalPrice >= 500 ? "Free" : "50"}</p>
            </div>
            <hr />
            <div className="flex justify-between text-xl font-semibold text-black_900 dark:text-white_900 py-2">
              <p>Total amount</p>{" "}
              <p>₹{totalPrice >= 500 ? totalPrice : totalPrice + 50}</p>
            </div>
            <hr />
            <p className="text-lg text-green-600 py-2">
              You will save ₹{originalPrice - totalPrice} on this order
            </p>
          </div>
          <p className="text-lg font-semibold text-black_100 dark:text-white_100 my-4">
            Delivery with in 7 Days
          </p>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
