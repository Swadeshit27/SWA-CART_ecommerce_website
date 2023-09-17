import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../Components/Spinner";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import OrderHistoryContainer from "../Components/OrderHistory/OrderHistoryContainer";

const OrderHistory = () => {
    const { email } = useSelector((state) => state.user);
    const [orderHistory, setOrderHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const CheckOrders = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post(
                "https://e-commerce-u47d.onrender.com/products/order",
                { email }
            );
            setLoading(false)
            setOrderHistory(data);
        } catch (error) {
            message.error("Internal error");
        }
    };
    useEffect(() => {
        CheckOrders();
    }, []);
    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div className="sm:m-8 my-4  sm:float-right max-sm:mx-auto  w-[90%] sm:w-[30rem]  bg_secondary overflow-hidden shadow-md border h-10 text-black_500 flex dark:text-white_500">
                        <input
                            className=" w-[90%] h-full px-4 outline-none dark:bg-black_500 "
                            type="search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search products"
                        />
                        <div className="w-[10%] h-full flex justify-center items-center cursor-pointer">
                            <HiMiniMagnifyingGlass size={25} />
                        </div>
                    </div>
                    <div className="min-h-[90vh]">
                        {orderHistory.length ? (
                            orderHistory.map((val) =>
                                val.orderItems
                                    .filter((items) =>
                                        items.title
                                            .toLowerCase()
                                            .includes(searchValue.toLowerCase())
                                    )
                                    .map((data) => (
                                        <OrderHistoryContainer data={data} orderId={val.PaymentOrderId} paymentId={val.paymentId} id={val._id} key={data.id} date={val.createdAt} />
                                    ))
                            )
                        ) : (
                            <></>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default OrderHistory;


