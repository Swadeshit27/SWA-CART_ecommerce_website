import React, { useState } from "react";
import CartItems from "../Components/AddToCart/CartItems";
import { useDispatch, useSelector } from "react-redux";
import Address from "./Address";
import SaveForLater from "../Components/AddToCart/SaveForLater";
import { message } from "antd";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { EmptyCart } from "../State";
import FinalPayment from "../Components/AddToCart/FinalPayment";

const Cart = () => {
  const totalPrice = useSelector((state) => state.totalPrice);
  const originalPrice = useSelector((state) => state.originalPrice);
  const Items = useSelector((state) => state.Items);
  const LaterItems = useSelector((state) => state.LaterItems);
  const { email } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const makeOrder = () => {
    if (!Order.address) message.error("please select Address");
    else {
      checkoutHandler(Order);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full xl:h-full max-w-[1400px] mx-auto my-8 flex justify-between md:p-8 flex-col xl:flex-row">
          {Items.length || LaterItems.length ? (
            <>
              <div className="w-full xl:w-[60%] h-auto xl:min-h-screen overflow-y-scroll">
                {Items.map((val, i) => (
                  <CartItems data={val} key={i} />
                ))}
                {LaterItems.length ? (
                  <>
                    <h3 className="w-full   bg_primary text-blue-600 py-2 max-sm:rounded-none   px-4 font-semibold">
                      Save for Later ({LaterItems.length})
                    </h3>
                    {LaterItems.map((val, i) => (
                      <SaveForLater data={val} key={i} />
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="w-full min-[500px]:w-[80%] mx-auto xl:w-[30%] ">
                <FinalPayment
                  originalPrice={originalPrice}
                  totalPrice={totalPrice}
                  length={Items.length}
                  qty={Items.qty}
                />
                <button
                  className={Items.length ? "cartBtn max-sm:ms-4" : "hidden"}
                  onClick={() => navigate('/address')}
                >
                  Place order
                </button>
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
      )}
    </>
  );
};

export default Cart;
