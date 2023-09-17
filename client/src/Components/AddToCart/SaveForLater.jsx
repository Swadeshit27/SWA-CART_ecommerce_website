import ProductDetails from '../Products/ProductDetails'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { MoveToCart, RemoveFromLater } from "../../State"
import { useDispatch } from 'react-redux'
const SaveForLater = ({ data }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className=' w-full min-h-[10rem] bg_primary max-sm:rounded-none p-4 sm:p-8 my-4'>
                <div className='flex'>
                    <div className="w-32 h-16  me-4">
                        <img src={data.imgSrc} alt="" className="w-full h-full object-contain" />
                        <div className='mt-4  flex justify-center'>
                            <p  >Qty: {data.qty}</p>
                        </div>
                    </div>
                    <div className='min-h-[5rem] w-[70%]'>
                        <ProductDetails data={data} />
                    </div>
                </div>
                <div className="flex w-full mt-4">
                    <button className="cartBtn" onClick={() => dispatch(MoveToCart(data))}>Move to cart</button>
                    <button className="cartBtn" onClick={() => dispatch(RemoveFromLater(data))}><RiDeleteBin6Line className="me-2" /> Remove</button>
                </div>
            </div>
        </>
    )
}

export default SaveForLater
