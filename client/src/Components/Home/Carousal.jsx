import React from 'react';
import { Carousel } from 'antd';


const CarouselContainer = () => (
    <Carousel autoplay>
        <div className='w-full min-h-[20rem] bg-white_900 dark:bg-black_900 rounded-md shadow-lg text-black_500 dark:text-white_500'>
            <div className="w-[50%] p-8  h-full  flex justify-center items-center">
                <h3 className='w-[80%] text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi quasi odit. </h3>
            </div>
        </div>
        <div className='w-full min-h-[20rem] bg-white_900 dark:bg-black_900 rounded-md shadow-lg text-black_500 dark:text-white_500'>
            <div className="w-[50%] p-8  h-full  flex justify-center items-center">
                <h3 className='w-[80%] text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi quasi odit. </h3>
            </div>
        </div>
        <div className='w-full min-h-[20rem] bg-white_900 dark:bg-black_900 rounded-md shadow-lg text-black_500 dark:text-white_500'>
            <div className="w-[50%] p-8  h-full  flex justify-center items-center">
                <h3 className='w-[80%] text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi quasi odit. </h3>
            </div>
        </div>
       
       
    </Carousel>
);

export default CarouselContainer;