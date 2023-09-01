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
        setQty(newQty + 1)
        dispatch(DecreaseCnt(data));
    }
    const handelIncrement = (data) => {
        setQty(newQty - 1)
        dispatch(IncreaseCnt(data));
    }
    return (
        <>
            <div className=' w-full min-h-[10rem]  bg-white_900 dark:bg-black_900  rounded-md shadow-lg  p-8 my-4'>
                <div className="flex">
                    <div className="w-32 h-16  me-4">
                        <img src={data.imgSrc} alt="" className="w-full h-full object-contain" />
                        <div className='mt-4  flex'>
                            <p className="w-6 h-6 rounded-full bg-red-400  flex justify-center items-center text-white cursor-pointer " onClick={() => handelDecrement(data)}><FiMinus /></p>
                            <input type="text" defaultValue={newQty} className="w-8 border-2 mx-2  font-semibold rounded-md text-center outline-none" />
                            <p className="w-6 h-6 rounded-full bg-green-400  flex justify-center items-center text-white cursor-pointer " onClick={() => handelIncrement(data)}><FiPlus /></p>
                        </div>
                    </div>
                    <div className='min-h-[5rem] w-full'>
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
