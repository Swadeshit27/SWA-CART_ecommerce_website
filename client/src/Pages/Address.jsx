import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Radio, message } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AddAddress, PlaceOrder } from '../State';
import Spinner from '../Components/Spinner'
import FinalPayment from '../Components/AddToCart/FinalPayment';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDelete } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'


const Address = () => {
    const { email, addressList } = useSelector(state => state.user);
    const totalPrice = useSelector((state) => state.totalPrice);
    const Items = useSelector((state) => state.Items);
    const originalPrice = useSelector((state) => state.originalPrice);
    const Order = useSelector((state) => state.Order);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [AddAd, setAddAd] = useState(false);
    const [address, setAddress] = useState({ id: Math.floor(Math.random() * 1000000), name: "", mobile: "", pin: "", locality: "", fullAddress: '', city: '', state: '', landmark: '', altMobile: '' });
    const [loading, setLoading] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    const addDetails = (e) => {
        const { value, name } = e.target;
        setAddress({ ...address, [name]: value });
    }

    const makePayment = (orderAddress) => {
        if (!orderAddress) message.error('select address');
        else {
            dispatch(PlaceOrder({ orderAddress, Items, totalPrice }));
        }
    }

    const handelCancel = () => {
        setAddress({ id: "", name: "", mobile: "", pin: "", locality: "", fullAddress: '', city: '', state: '', landmark: '', altMobile: '' });
        setAddAd(false);
        setIsUpdate(false);
    }

    const handelUpdate = (data) => {
        setAddAd(true);
        setIsUpdate(true);
        console.log(data);
        const { id, name, mobile, pin, locality, fullAddress, city, state, landmark, altMobile } = data;
        setAddress({ id, name, mobile, pin, locality, fullAddress, city, state, landmark, altMobile });
    }

    // save address
    const SaveAddress = async (e) => {
        const { name, mobile, pin, locality, fullAddress, city, state } = address;
        if (!(name && mobile && pin && fullAddress && city && state)) {
            message.warning('Please fill the * fields')
        }
        else {
            setLoading(true);
            const { data } = await axios.post('https://e-commerce-u47d.onrender.com/address/add', { email, address });
            setLoading(false);
            message.success('Address saved');
            dispatch(AddAddress(data.data));
            setAddress({ id: "", name: "", mobile: "", pin: "", locality: "", fullAddress: '', city: '', state: '', landmark: '', altMobile: '' });
            setAddAd(false);
        }
    }
    // delete address
    const handelDelete = async (value) => {
        const { id } = value;
        setLoading(true);
        const { data } = await axios.post('https://e-commerce-u47d.onrender.com/address/delete', { id, email });
        setLoading(false);
        message.success('Address deleted successfully');
        dispatch(AddAddress(data.data));
    }

    // update address
    const updateAddress = async () => {
        const { name, mobile, pin, locality, fullAddress, city, state } = address;
        if (!(name && mobile && pin && locality && fullAddress && city && state)) {
            message.warning('Please fill the * fields')
        }
        else {
            setLoading(true);
            const { data } = await axios.post('https://e-commerce-u47d.onrender.com/address/update', { email, address });
            console.log(data);
            setLoading(false);
            message.success('Address updated successfully');
            dispatch(AddAddress(data.data));
            setAddress({ id: "", name: "", mobile: "", pin: "", locality: "", fullAddress: '', city: '', state: '', landmark: '', altMobile: '' });
            setAddAd(false);
        }
    }
    /****************************************** Payment section  start******************************************** */
    const checkoutHandler = async (value) => {
        if (!value.address) return message.warning('Select address');
        const { name, mobile } = value.address;
        const finalPrice = value.finalPrice < 500 ? value.finalPrice + 50 : value.finalPrice;
        setLoading(true);
        const {
            data: { key },
        } = await axios.get("https://e-commerce-u47d.onrender.com/api/getKey");
        const { data } = await axios.post("https://e-commerce-u47d.onrender.com/api/checkout", {
            email,
            value, finalPrice
        });
        const { order, orderData } = data;
        setLoading(false);
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "SWA-CART",
            description: "A e-commerce store",
            image: "logo2.png",
            order_id: order.id,
            handler: function (res) {
                axios.post("https://e-commerce-u47d.onrender.com/api/verification", { res, orderData, email }).then(res => {
                    console.log(res.data);
                    const id = res.data.paymentId;
                    navigate(`/success`)
                }).catch(err => navigate('/cart'));
            },
            prefill: {
                name,
                email: Items.email,
                contact: mobile,
            },
            notify: {
                sms: true,
                email: true
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#FF9B50",
            },
        };

        const razor = new window.Razorpay(options);
        console.log(razor);
        razor.open();
    };
    /****************************************** Payment section end ******************************************** */


    return (
        <>
            {loading ? <Spinner /> :
                <div className="w-full min-h-screen lg:h-[80vh] max-w-[1400px] mx-auto my-8 flex justify-between md:p-8 flex-col xl:flex-row">
                    <div className='w-full xl:w-[60%] h-full'>
                        {addressList.length ?
                            <>
                                <div className="w-full min-h-[10rem]   mb-4 bg_primary max-sm:rounded-none overflow-hidden">
                                    <h6 className='text-xl font-semibold bg-blue-600 px-4 py-2 text-white'>Delivery Address</h6>
                                    <div className="flex p-4 w-full ">
                                        <Radio.Group name="radiogroup" className='w-full h-full' >
                                            {addressList.map((val, i) => (
                                                <Radio value={val} className='' key={i} onChange={e => makePayment(e.target.value)}>
                                                    <SaveAddresses data={val} />
                                                    <div className="flex">
                                                        <div className="w-12 py-2 text-white bg-green-400 rounded-lg cursor-pointer text-xl flex justify-center items-center me-4" onClick={() => handelUpdate(val)}><BiEdit /></div>
                                                        <div className="w-12 py-2 text-white bg-red-400 rounded-lg cursor-pointer text-xl flex justify-center items-center me-4" onClick={() => handelDelete(val)}><MdOutlineDelete /></div>
                                                    </div>
                                                </Radio>
                                            ))}
                                        </Radio.Group>
                                    </div >
                                </div >
                            </ >
                            : <></>
                        }
                        <div className="w-full flex items-center my-4 bg_primary max-sm:rounded-none text-blue-600 text-xl font-semibold  px-4 py-2 cursor-pointer" onClick={() => setAddAd(!AddAd)}>
                            <FaPlus className='me-4' /> Add New Address
                        </div>
                        <div className={AddAd ? " absolute top-0 left-0 z-20 w-full min-h-screen bg-gray-800/50 flex justify-center items-center" : "hidden"}>
                            <div className={AddAd ? "w-full sm:w-[80%] min-h-[10rem] grid grid-cols-12 gap-x-4 gap-y-6 mb-8 bg_primary max-sm:rounded-none p-4 sm:p-8 " : "hidden"}>
                                {
                                    isUpdate ?
                                        <h6 className='col-span-12 text-blue-600 font-semibold text-xl'>Update Address</h6> :
                                        <h6 className='col-span-12 text-blue-600 font-semibold text-xl'>Add New Address</h6>
                                }
                                <div className="col-span-12 sm:col-span-6 ">
                                    <input type="text" placeholder='Name*' className='inputStyle' name='name' value={address.name} onChange={e => addDetails(e)} />
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <input type="number" placeholder='10 digit mobile no*' className='inputStyle' value={address.mobile} name='mobile' onChange={e => addDetails(e)} />
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <input type="number" placeholder='Pin code*' className='inputStyle' value={address.pin} name='pin' onChange={e => addDetails(e)} />
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <input type="text" placeholder='Locality*' className='inputStyle' value={address.locality} name='locality' onChange={e => addDetails(e)} />
                                </div>
                                <div className="col-span-12">
                                    <textarea rows={4} type="text" placeholder='Full Address*' className='inputStyle' name='fullAddress' value={address.fullAddress} onChange={e => addDetails(e)} />
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <input type="text" placeholder='City/Dist/Town*' className='inputStyle' value={address.city} name='city' onChange={e => addDetails(e)} />
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <input type="text" placeholder='State*' className='inputStyle' value={address.state} name='state' onChange={e => addDetails(e)} />
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <input type="text" placeholder='Landmark(optional)' className='inputStyle' value={address.landmark} name='landmark' onChange={e => addDetails(e)} />
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <input type="number" placeholder='Alternative no(optional)' className='inputStyle' value={address.altMobile} name='altMobile' onChange={e => addDetails(e)} />
                                </div>
                                <div className="col-span-12 md:col-span-8 flex items-center">
                                    {
                                        !isUpdate ?
                                            <button className='cartBtn me-8 ' onClick={SaveAddress}>Add Address</button> :
                                            <button className='cartBtn me-8' onClick={updateAddress}>Update </button>
                                    }
                                    <h6 className='text-lg  text-red-600 cursor-pointer' onClick={handelCancel}>Cancel</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full min-[500px]:w-[80%] mx-auto xl:w-[30%] ">
                        <FinalPayment
                            originalPrice={originalPrice}
                            totalPrice={totalPrice}
                            length={Items.length}
                            qty={Items.qty}
                        />
                        <button
                            className={Items.length ? "cartBtn max-sm:ms-4" : "hidden"}
                            onClick={() => checkoutHandler(Order)}
                        >
                            Place order
                        </button>
                    </div>
                </div>
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
