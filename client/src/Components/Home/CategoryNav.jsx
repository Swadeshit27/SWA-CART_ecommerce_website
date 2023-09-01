import React from 'react'
import { NavMenuData } from "../../assets/NavMenuData";

const CategoryNav = ({ filterCategory }) => {
    return (
        // <div className="  md:flex w-full  my-3 mx-4 rounded-md">
        <div className="hidden first-letter:w-full  max-w-[1400px] mx-auto mt-8 py-4 rounded-md shadow-lg md:flex justify-evenly items-center  bg-white_900 text-black_500 dark:bg-black_900 dark:text-white_500">
            {NavMenuData.map((data) => {
                return (
                    <div
                        key={data.id}
                        className=" flex flex-col justify-center items-center cursor-pointer" value={data.title} onClick={e => filterCategory(e.target.value)}
                    >
                        <img src={data.imgSrc} alt="menu" className=" w-16" />
                        <h4 className=" text-center font-semibold">{data.title}</h4>
                    </div>
                );
            })}
        </div>
        // </div>
    );
}

export default CategoryNav