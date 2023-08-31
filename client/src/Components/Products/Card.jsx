import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiFillHeart, AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../../State'
import ProductDetails from './ProductDetails'

const Card = ({ data }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="col-span-12 min-w-[450px]:col-span-6  lg:col-span-4 xl:col-span-3">
                <div className='h-[30rem] bg-white_900 dark:bg-black_900 shadow-lg border p-4 overflow-hidden relative  box rounded-md '>
                    <div className='favourate hearticon'><AiFillHeart size={20} /></div>
                    <img className=' h-52 m-4 object-cover mx-auto' src={data.imgSrc} alt="" />
                    <ProductDetails data={data} />
                    <div className='flex justify-between items-center my-2'>
                        <button className='cartBtn w-[50%]' onClick={() => dispatch(AddToCart(data))} >Add To Cart</button>
                        <button className='cartBtn w-[50%] me-0' >Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card