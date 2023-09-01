import Card from './Card'
import React, { useEffect, useState } from 'react'
import { ElectronicsData } from '../../assets/ElectronicsData'
import { Radio } from 'antd';
import { MdFilterListAlt } from 'react-icons/md'
import { NavMenuData } from '../../assets/NavMenuData';

const Items = () => {
    const [ItemsList, setItemList] = useState([]);
    const [tempList, setTempList] = useState(ElectronicsData);
    const [isUpdate, setUpdate] = useState(true);
    const [isVis, setIsVis] = useState(false);

    // fileter data
    const filterData = (val) => {
        setUpdate(!isUpdate);
        let update = ElectronicsData;
        switch (val) {
            case 'lToh':
                update = ElectronicsData.sort((a, b) => a.price - b.price);
                break;
            case 'hTol':
                update = ElectronicsData.sort((a, b) => b.price - a.price);
                break;
            case '<500':
                update = ElectronicsData.filter(val => val.price < 500);
                break;
            case '500 - 999':
                update = ElectronicsData.filter(val => val.price < 1000 && val.price >= 500);
                break;
            case '1000-5000':
                update = ElectronicsData.filter(val => val.price < 5000 && val.price >= 1000);
                break;
            case '>10000':
                update = ElectronicsData.filter(val => val.price > 10000);
                break;
            case '>4':
                update = ElectronicsData.filter(val => val.rating > 4);
                break;
            case '>3':
                update = ElectronicsData.filter(val => val.rating > 3);
                break;
            case '>2':
                update = ElectronicsData.filter(val => val.rating > 2);
                break;
            case '>1':
                update = ElectronicsData.filter(val => val.rating > 1);
                break;
            case 'Electronics':
                update = ElectronicsData.filter(val => val.category === 'Electronics');
                break;
            case 'Mobile':
                update = ElectronicsData.filter(val => val.category === 'Mobile');
                break;
            case 'Fashion':
                update = ElectronicsData.filter(val => val.category === 'Fashion');
                break;
            case 'Appliances':
                update = ElectronicsData.filter(val => val.category === 'Appliances');
                break;
            case 'Toys':
                update = ElectronicsData.filter(val => val.category === 'Toys');
                break;
            case 'Shoes':
                update = ElectronicsData.filter(val => val.category === 'Shoes');
                break;
            default:
                break;
        }
        setTempList(update)
        setIsVis(false);
    }
    useEffect(() => {
        setItemList(tempList);
    }, [isUpdate])


    return (
        <>
            <div className="hidden first-letter:w-full  max-w-[1400px] mx-auto mt-8 py-4 rounded-md shadow-lg md:flex justify-evenly items-center  bg-white_900 text-black_500 dark:bg-black_900 dark:text-white_500">
                {NavMenuData.map((data) => {
                    return (
                        <div
                            key={data.id}
                            className=" flex flex-col justify-center items-center cursor-pointer" onClick={e => filterData(data.title)}
                        >
                            <img src={data.imgSrc} alt="menu" className=" w-16" />
                            <h4 className=" text-center font-semibold">{data.title}</h4>
                        </div>
                    );
                })}
            </div>
            <div className="relative">
                <div className='flex text-xl items-center font-semibold text-black_500 dark:text-white_500 ms-4 md:ms-12 my-4 cursor-pointer w-32 ' onClick={e => setIsVis(!isVis)}><MdFilterListAlt />  Filter</div>
                <div className={isVis ? "w-[15rem] md:w-[20rem] min-h-20 my-8 p-4 bg-white_500 dark:bg-black_100 rounded-md shadow-lg text-black_300 dark:text-white_500 absolute top-4 left-4 z-10" : 'hidden'}>
                    <h3 className='text-center' >Sort By</h3>
                    <div className='flex  flex-col items-start ms-4 md:ms-8 '>
                        <div className=" me-4 md:hidden">
                            <h4 className='text-xl my-2  '>Category</h4>
                            <Radio.Group onChange={e => filterData(e.target.value)} className='flex flex-col '>
                                <Radio value={'Mobile'} >Mobile</Radio>
                                <Radio value={'Electronics'} >Electronics</Radio>
                                <Radio value={'Fashion'} >Fashion</Radio>
                                <Radio value={'Appliances'} >Appliances</Radio>
                                <Radio value={'Toys'} >Toys</Radio>
                                <Radio value={'Shoes'} >Shoes</Radio>
                            </Radio.Group>
                        </div>
                        <div className=" me-4">
                            <h4 className='text-xl my-2'>Price</h4>
                            <Radio.Group onChange={e => filterData(e.target.value)} value={0} className='flex flex-col'>
                                <Radio value={'lToh'}>low to high</Radio>
                                <Radio value={'hTol'}>high to low</Radio>
                            </Radio.Group>
                        </div>
                        <div className=" me-4">
                            <h4 className='text-xl my-2'>Rating</h4>
                            <Radio.Group onChange={e => filterData(e.target.value)} value={0} className='flex flex-col'>
                                <Radio value=">4">{'>4 start'}</Radio>
                                <Radio value=">3">{'>3 start'}</Radio>
                                <Radio value=">2">{'>2 start'}</Radio>
                                <Radio value=">1">{'>1 start'}</Radio>
                            </Radio.Group>
                        </div>
                        <div className=" me-4">
                            <h4 className='text-xl my-2'>Price Range</h4>
                            <Radio.Group onChange={e => filterData(e.target.value)} value={0} className='flex flex-col'>
                                <Radio value="<500">{"<500"}</Radio>
                                <Radio value="500 - 999">{"500 - 999"}</Radio>
                                <Radio value="1000-5000">{"1000-5000"}</Radio>
                                <Radio value=">10000">{">10000"}</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </div>
            </div >

            <div className='h-full w-full max-w-[1400px] mx-auto grid grid-cols-12 gap-x-4 gap-y-8 mb-12 p-4'>
                {ItemsList.map((val => <Card data={val} key={val.id} />))}
            </div>
        </>
    )
}

export default Items

