import { Link, useSearchParams } from "react-router-dom"

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get("reference");

    return (
        <>
            <div class="w-full h-screen flex justify-center text-black_500 dark:text-white_500" >
                <div>
                    <img src="Order successful.svg" alt="success" class="img-fluid" width="500" />
                    <h1 className=' text-center opacity-50'>Order successful</h1>
                    <h4 className=' text-center my-4 '>Order Id: {referenceNum} </h4>
                    <Link className='cartBtn mt-5 mx-auto' to="/">Home</Link>
                </div>
            </div>
        </>
    )
}
export default PaymentSuccess