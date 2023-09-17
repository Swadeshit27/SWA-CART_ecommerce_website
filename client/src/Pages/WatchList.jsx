import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetails from '../Components/Products/ProductDetails';
import { AddToCart, removeFromWatchList } from '../State';
import { Link } from 'react-router-dom';

const WatchList = () => {
    const watchedItems = useSelector(state => state.watchList);
    const dispatch = useDispatch();

    return (
        <>
            <div className="w-full h-full min-h-[80vh]">
                {watchedItems.length ? <>{
                    watchedItems.map((val, i) => {
                        return (
                            <div className='w-full sm:w-[80%] mx-auto h-auto  my-4 bg_primary max-sm:rounded-none p-4 sm:p-8  ' key={i}>
                                <div className='flex '>
                                    <div className='w-20'>
                                        <img src={val.imgSrc} alt="" className='h-16 w-16  min-w-[4rem] object-contain' />
                                    </div>
                                    <div className='ms-8 w-[70%]'>
                                        <ProductDetails data={val} />
                                    </div>
                                </div>
                                <div className='flex mt-4'>
                                    <div className="cartBtn" onClick={() => { dispatch(AddToCart(val)), dispatch(removeFromWatchList(val)) }} >Add To Cart</div>
                                    <div className="cartBtn" onClick={() => dispatch(removeFromWatchList(val))}>Remove </div>
                                </div>
                            </div>
                        )
                    })}</> :
                    <div className="w-full h-full py-8">
                        <img
                            src="empty cart.svg"
                            alt="empty cart"
                            className="w-[50%] h-[50%] object-contain mx-auto"
                        />
                        <h1 className="text-center opacity-70 font-semibold ">Your watchList is Empty!</h1>
                        <Link to={'/'}><div className="cartBtn mx-auto my-4" >Add Now</div></Link>
                    </div>
                }
            </div>
        </>
    )
}

export default WatchList
