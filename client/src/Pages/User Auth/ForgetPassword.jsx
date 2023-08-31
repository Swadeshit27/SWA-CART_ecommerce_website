import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handelLogIn = async (e) => {
        if (!(email && password)) message.warning('please fill all the fields');
        else {
            const res = await axios.post('http://localhost:6001/auth/forget', { email, password });
            if (res.data.success) {
                message.success(res.data.message);
                navigate('/login');
            }
            else message.error(res.data.message);
        }
    }

    return (
        <>
            <div className="h-screen w-full flex justify-center items-center bg-gray-100 ">
                <div className="min-h-48 w-[25rem] bg-white rounded-lg shadow-lg p-4 border-[1px] border-gray-200">
                    <div className='my-4'>
                        <input type="email" name="email" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} className='w-full py-2 px-4 border-[1px] border-gray-200 text-xl rounded-md outline-none' />
                    </div>
                    <div className='my-4'>
                        <input type="password" name="password" placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} className='w-full py-2 px-4 border-[1px] border-gray-200 text-xl rounded-md outline-none' />
                    </div>
                    <div className='w-full py-2 text-center text-2xl font-[600] text-white bg-[#1877f2] rounded-lg cursor-pointer' onClick={handelLogIn}>Update Password</div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword
