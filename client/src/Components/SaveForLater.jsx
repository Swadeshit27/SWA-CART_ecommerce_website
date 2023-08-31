import ProductDetails from './Products/ProductDetails'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { MoveToCart, RemoveFromLater } from "../State"
import { useDispatch } from 'react-redux'
const SaveForLater = ({ data }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className=' w-full min-h-[10rem]  bg-white_900 dark:bg-black_900  rounded-md shadow-lg flex p-8 my-4'>
                <div className="w-32 h-16  me-4">
                    <img src={data.imgSrc} alt="" className="w-full h-full object-contain" />
                    <div className='mt-4  flex'>
                        <p className="w-6 h-6 rounded-full bg-red-400  flex justify-center items-center text-white cursor-pointer "><FiMinus /></p>
                        <input type="text" defaultValue={data.qty} className="w-8 border-2 mx-2  font-semibold rounded-md text-center outline-none" />
                        <p className="w-6 h-6 rounded-full bg-green-400  flex justify-center items-center text-white cursor-pointer "><FiPlus /></p>
                    </div>
                </div>

                <div className='min-h-[5rem] w-full'>
                    <ProductDetails data={data} />
                    <div className="flex w-full mt-4">
                        <button className="cartBtn" onClick={() => dispatch(MoveToCart(data))}>Move to cart</button>
                        <button className="cartBtn" onClick={() => dispatch(RemoveFromLater(data))}><RiDeleteBin6Line className="me-2" /> Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SaveForLater
