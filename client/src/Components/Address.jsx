import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Radio, message } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AddAddress } from '../State';
import ReactLoading from 'react-loading';


const Address = () => {
    const { email, addressList } = useSelector(state => state.user);
    const { originalPrice } = useSelector(state => state.originalPrice);
    const dispatch = useDispatch();
    const [select, setSelect] = useState(false);
    const [AddAd, setAddAd] = useState(false);
    const [address, setAddress] = useState({ name: "", mobile: "", pin: "", locality: "", fullAddress: '', city: '', state: '', landmark: '', altMobile: '' });
    const [loading, setLoading] = useState(false);

    const addDetails = (e) => {
        const { value, name } = e.target;
        setAddress({ ...address, [name]: value });
    }
    const SaveAddress = async (e) => {
        const { name, mobile, pin, locality, fullAddress, city, state } = address;
        if (!(name && mobile && pin && locality && fullAddress && city && state)) {
            message.warning('Please fill the * fields')
        }
        else {
            setLoading(true);
            const { data } = await axios.post('http://localhost:6001/address', { email, address });
            setLoading(false);
            message.success('Address saved');
            dispatch(AddAddress(data.data));
            setAddress({ name: "", mobile: "", pin: "", locality: "", fullAddress: '', city: '', state: '', landmark: '', altMobile: '' });
            setAddAd(false)
        }
    }
    /****************************************** Payment section  start******************************************** */
    const checkoutHandler = async (data) => {
        const { name, mobile } = data;
        setLoading(true);
        const { data: { key } } = await axios.get("http://www.localhost:6001/api/getKey")
        const { data: { order } } = await axios.post("http://localhost:6001/api/checkout", {
            amount: 5000
        })
        setLoading(false);
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Pal E-commerce store",
            description: "A e-commerce store",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "http://localhost:6001/api/verification",
            prefill: {
                name,
                email: email,
                contact: mobile
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#FF9B50"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
    /****************************************** Payment section end ******************************************** */

    return (
        <>
            {loading ?
                <div className="h-screen w-full flex justify-center  items-center ">
                    <ReactLoading type={'spokes'} color={'#000'} height={150} width={150} />
                </div> :
                <>
                    <div className="w-full min-h-[10rem] bg-white_900 dark:bg-black_900 mb-4 rounded-md overflow-hidden">
                        <h4 className='text-xl font-semibold bg-blue-600 px-4 py-2 text-white'>Delivery Address</h4>
                        <div className="flex p-4 w-full ">
                            <Radio.Group name="radiogroup" className='w-full h-full' >
                                {addressList.map((val, i) => (
                                    <Radio value={val} className='' key={i}>
                                        <SaveAddresses data={val} />
                                        <button className='cartBtn mt-2' onClick={() => checkoutHandler(val)}>Make payment</button>
                                    </Radio>
                                ))}
                            </Radio.Group>
                        </div >
                    </div >
                    <div className="w-full flex items-center my-4 bg-white_900 dark:bg-black_900 text-blue-600 text-xl font-semibold  px-4 py-2" onClick={() => setAddAd(true)}>
                        <FaPlus className='me-4' /> Add New Address
                    </div>
                    <div className={AddAd ? "w-full min-h-[10rem] grid grid-cols-12 gap-x-4 gap-y-6  bg-white_900 dark:bg-black_900 p-8 rounded-md shadow-lg" : "hidden"}>
                        <h3 className='col-span-12 text-blue-600 font-semibold'>Add New Address</h3>
                        <div className="col-span-6">
                            <input type="text" placeholder='Name*' className='inputStyle' name='name' value={address.name} onChange={e => addDetails(e)} />
                        </div>
                        <div className="col-span-6">
                            <input type="number" placeholder='10 digit mobile no*' className='inputStyle' value={address.mobile} name='mobile' onChange={e => addDetails(e)} />
                        </div>
                        <div className="col-span-6">
                            <input type="number" placeholder='Pin code*' className='inputStyle' value={address.pin} name='pin' onChange={e => addDetails(e)} />
                        </div>
                        <div className="col-span-6">
                            <input type="text" placeholder='Locality' className='inputStyle' value={address.locality} name='locality' onChange={e => addDetails(e)} />
                        </div>
                        <div className="col-span-12">
                            <textarea rows={4} type="text" placeholder='Full Address*' className='inputStyle' name='fullAddress' value={address.fullAddress} onChange={e => addDetails(e)} />
                        </div>
                        <div className="col-span-6">
                            <input type="text" placeholder='City/Dist/Town*' className='inputStyle' value={address.city} name='city' onChange={e => addDetails(e)} />
                        </div>
                        <div className="col-span-6">
                            <input type="text" placeholder='State*' className='inputStyle' value={address.state} name='state' onChange={e => addDetails(e)} />
                        </div>
                        <div className="col-span-6">
                            <input type="text" placeholder='Landmark(optional)' className='inputStyle' value={address.landmark} name='landmark' onChange={e => addDetails(e)} />
                        </div>
                        <div className="col-span-6">
                            <input type="number" placeholder='Alternative no(optional)' className='inputStyle' value={address.altMobile} name='altMobile' onChange={e => addDetails(e)} />
                        </div>
                        <div className="col-span-8 flex items-center">
                            <button className='cartBtn w-[50%] me-8' onClick={SaveAddress}>Save Address</button>
                            <p className='text-lg font-semibold text-blue-600 cursor-pointer' onClick={() => setAddAd(false)}>Cancel</p>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Address


const SaveAddresses = ({ data }) => {
    const { name, mobile, pin, locality, fullAddress, city, state } = data;
    return (
        <div className='ms-4 my-4'>
            <div className="flex">
                <p className='text-lg font-semibold text-black_900 dark:text-white_900 capitalize me-4'>{name}</p>
                <p className='text-lg font-semibold text-black_900 dark:text-white_900 capitalize me-4'>{mobile}</p>
            </div>
            <div className="flex text-black_100 dark:text-white_100">
                <p>{locality}, {fullAddress},{city}, {state}-{pin}</p>
            </div>

        </div>
    )
}
