import { AiFillCheckCircle } from 'react-icons/ai'

const OrderHistory = () => {
    return (
        <>
            <div className="w-full max-w-[1400px] mx-auto p-4">
                <div className="w-full min-h-20 bg-white_900 dark:bg-black_900 rounded-md shadow-lg flex flex-col md:flex-row my-4 p-8">
                    <div className='flex md:w-[50%]'>
                        <img src="https://rukminim2.flixcart.com/image/xif0q/trouser/l/2/8/38-aw19ch004d-metronaut-original-imafwyf6dhyahszf-bb.jpeg" alt="" className='w-24 h-16 object-contain me-4' />
                        <div>
                            <h4 className=' font-semibold text-sm md:text-lg   w-[80%]  text-black_700 dark:text-white_700'>METRONAUT Slim Fit Men Viscose Rayon Dar...</h4>
                            <p className='text-dark_100 dark:text-white_100 text-sm'>Color: Dark green Size: 32</p>
                            <p className='text-lg font-bold'>  ₹109</p>
                        </div>
                    </div>
                    <div className="md:w-[50%] ps-4">
                        <div className='flex items-center text-lg font-semibold text-black_900 dark:text-white_900'><AiFillCheckCircle className='text-green-600 me-2' />  Delivered on 26 Aug</div>
                        <p className='text-dark_100 dark:text-white_100'>Your item have been Delivered</p>
                        <p className='text-blue-600 font-semibold'>Rate and review us</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderHistory
