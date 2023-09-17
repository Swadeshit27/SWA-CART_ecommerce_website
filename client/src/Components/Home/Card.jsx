import React, { useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, removeFromWatchList, setWatchList } from '../../State'
import ProductDetails from '../Products/ProductDetails'


const Card = ({ data }) => {
    const dispatch = useDispatch();
    const watchList = useSelector(state => state.watchList);
    const [isWatch, setIsWatch] = useState(true);
    const handelWatched = (data) => {
        dispatch(setWatchList(data));
        setIsWatch(false);
    }
    const unWatched = (data) => {
        dispatch(removeFromWatchList(data));
        setIsWatch(true);
    }
    
    return (
        <>
            <div className="col-span-12 min-[600px]:col-span-6  lg:col-span-4 xl:col-span-3">
                <div className='h-[30rem] bg_primary p-4 overflow-hidden relative  box  '>
                    <div className='float-right  cursor-pointer'  >{isWatch ? <AiFillHeart size={20} className='text-black_300 dark:text-white_300' onClick={e => handelWatched(data)} /> : <AiFillHeart size={20} className='text-rose-500' onClick={e => unWatched(data)} />}</div>
                    <img className=' h-52 m-4 object-contain mx-auto' src={data.imgSrc} alt="" />
                    <ProductDetails data={data} />
                    <div className='flex justify-between items-center my-2'>
                        <button className='cartBtn w-[50%]' onClick={() => dispatch(AddToCart(data))} >Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card