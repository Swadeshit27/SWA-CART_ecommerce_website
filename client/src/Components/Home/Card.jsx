import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../../State'
import ProductDetails from '../Products/ProductDetails'

const Card = ({ data }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="col-span-12 min-[600px]:col-span-6  lg:col-span-4 xl:col-span-3">
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