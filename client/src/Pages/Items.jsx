import Card from '../Components/Products/Card'
import React, { useEffect, useState } from 'react'
import { ElectronicsData } from '../assets/ElectronicsData'
import { Button, Dropdown } from 'antd';

const Items = () => {
    const [ItemsList, setItemList] = useState(ElectronicsData);
    const filterData = (val) => {
        console.log('i am call')
        console.log(val);
        switch (val) {
            case 'lToh':
                const updateList = ElectronicsData.sort((a, b) => a.price - b.price);
                window.location.reload();
                setItemList(ElectronicsData);
                console.log(ElectronicsData);
                break;
            case 'hTol':
                const hightoLow = ElectronicsData.sort((a, b) => b.price - a.price);
                setItemList(ElectronicsData);
                console.log(ElectronicsData);
                break;
            default:
                break;
        }
    }



    return (
        <>
            <div className=" w-full max-w-[1400px] mx-auto my-8 p-4">
                <h3 className='text-black_500 dark:text-white_500' >Filter Items</h3>
                <div className='flex my-4 flex-col lg:flex-row  text-black_500 dark:text-white_500'>
                    <div className=" me-4">
                        category:
                        <select onChange={e => filterData(e.target.value)}>
                            <option value="electronics">electronics</option>
                            <option value="clothes">clothes</option>
                            <option value="">electronics</option>
                            <option value="">electronics</option>
                        </select>
                    </div>
                    <div className="me-4" onChange={e => filterData(e.target.value)}>
                        Sort By:
                        <select>
                            <option value="lToh">low to high</option>
                            <option value="hTol">high to low</option>
                        </select>
                    </div>
                    <div className="me-4">
                        Price:
                        <select>
                            <option value="electronics">less than 500</option>
                            <option value="clothes">less than 1000</option>
                            <option value="">less than 5000</option>
                            <option value="">less than 10000</option>
                        </select>
                    </div>
                    <div className="me-4">
                        Rating:
                        <select>
                            <option value="electronics">greater than 4</option>
                            <option value="clothes">greater than 3</option>
                            <option value="">greater than 2</option>
                            <option value="">greater than 1</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='h-full w-full max-w-[1400px] mx-auto grid grid-cols-12 gap-x-4 gap-y-8 mb-12 p-4'>
                {ItemsList.map((val => <Card data={val} key={val.id} />))}
            </div>
        </>
    )
}

export default Items




// const items: MenuProps['items'] = [
//     {
//         key: '1',
//         label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//                 1st menu item
//             </a>
//         ),
//     },
//     {
//         key: '2',
//         label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//                 2nd menu item
//             </a>
//         ),
//     },
//     {
//         key: '3',
//         label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//                 3rd menu item
//             </a>
//         ),
//     },
// ];

const DropdownMenu = () => (
    <>
        <Dropdown menu={{ items }} placement="bottom" arrow>
            <Button>bottom</Button>
        </Dropdown>
    </>
);