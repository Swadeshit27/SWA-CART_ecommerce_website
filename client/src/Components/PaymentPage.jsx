import axios from "axios";

const PaymentPage = () => {
    const checkoutHandler = async (amount) => {
        const { data: { key } } = await axios.get("http://www.localhost:6001/api/getKey")
        console.log(key)
        const { data: { order } } = await axios.post("https://e-commerce-u47d.onrender.com/api/checkout", {
            amount
        })
        console.log(order);
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "6 Pack Programmer",
            description: "A e-commerce store",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "https://e-commerce-u47d.onrender.com/api/verification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#FF9B50"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
    return (
        <>
            <div>
                <img src={'https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png'} className="w-[5rem] h-[5rem]" />
                <p>₹5000</p>
                <button onClick={() => checkoutHandler(800)}>Buy Now</button>
            </div>
        </>
    )
}

export default PaymentPage
