import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { useDispatch } from "react-redux"
import { DecreaseCnt, IncreaseCnt, RemoveItems, saveForLater } from "../../State"
import AddToCartITems from "./AddToCartITems"
import { useState } from 'react'

const CartItems = ({ data }) => {
    const [newQty, setQty] = useState(data.qty);
    const dispatch = useDispatch();
    const handelDecrement = (data) => {
        if (newQty > 1) {
            dispatch(DecreaseCnt(data));
            setQty(newQty - 1)
        }
    }
    const handelIncrement = (data) => {
        if (newQty < 10) {
            dispatch(IncreaseCnt(data));
            setQty(newQty + 1)
        }
    }
    return (
        <>
            <div className=' w-full min-h-[10rem]  bg_primary max-sm:rounded-none p-4  sm:p-8 my-4'>
                <div className="flex">
                    <div className="w-32 h-16  me-4">
                        <img src={data.imgSrc} alt="" className="w-full h-full object-contain" />
                        <div className='mt-4  flex justify-center'>
                            <h6 className="w-6 h-6 rounded-full bg-red-400  flex justify-center items-center text-white cursor-pointer " onClick={() => handelDecrement(data)}><FiMinus /></h6>
                            <div className="w-8 border-2 mx-2  font-semibold rounded-md text-center outline-none dark:text-white_900" >{newQty}</div>
                            <h6 className="w-6 h-6 rounded-full bg-green-400  flex justify-center items-center text-white cursor-pointer " onClick={() => handelIncrement(data)}><FiPlus /></h6>
                        </div>
                    </div>
                    <div className='min-h-[5rem] w-[60%]'>
                        <AddToCartITems data={data} />
                    </div>
                </div>
                <div className="w-full mt-4 flex">
                    <button className="cartBtn" onClick={() => dispatch(saveForLater(data))}>Save for later</button>
                    <button className="cartBtn" onClick={() => dispatch(RemoveItems(data))}><RiDeleteBin6Line className="me-2" /> Remove</button>
                    {/* <button className="cartBtn"><AiFillThunderbolt className="me-2" /> Buy this now</button> */}
                </div>
            </div>
        </>
    )
}

export default CartItems
