import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='w-full bg-white_900 dark:bg-black_900'>
            <div className='w-full max-w-[1040px] p-8 mx-auto grid  sm:gap-6 sm:grid-cols-2 md:grid-cols-4 border-b '>
                <div className='pl-10 md:pl-6' >
                    <h3 className='font-medium text-2xl py-2 text-[#6876de]'>Location</h3>
                    <List data={'India'} />
                    <List data={'India'} />
                    <List data={'India'} />
                    <List data={'India'} />
                </div>
                <div className='pl-10 md:pl-6'>
                    <h1 className='font-medium text-2xl py-2 text-[#6876de]'>QuicK Links</h1>
                    <div className="flex flex-col">
                        <Link to={'/'} className=' footerListStyle'>Home</Link>
                        <Link to={'/cart'} className='footerListStyle'>Cart</Link>
                        <Link to={'/history'} className='footerListStyle'>Order</Link>
                        <Link to={'/contact'} className='footerListStyle'>Contact Us</Link>
                    </div>
                </div>
                <div className='pl-10 md:pl-6'>
                    <h1 className='font-medium text-2xl py-2 text-[#6876de]'>Contact Info</h1>
                    <List data={'+123-456-7898'} />
                    <List data={'+123-456-7898'} />
                    <List data={'rohanhati@gmail.com'} />
                    <List data={'subhampal@gmail.com'} />
                </div>
                <div className='pl-10 md:pl-6'>
                    <h1 className='font-medium text-2xl py-2 text-[#6876de] text-center'>Follow Us</h1>
                    <div className='flex justify-center'>
                        <div><FaFacebookSquare size={30} className='text-blue-600 me-2 cursor-pointer ' /></div>
                        <p><FaInstagram size={30} className='text-rose-600 mx-2 cursor-pointer' /></p>
                        <p><FaLinkedin size={30} className='text-blue-500 mx-2 cursor-pointer' /></p>
                        <p><FaTwitter size={30} className='text-blue-400 ms-2 cursor-pointer' /></p>
                    </div>
                </div>
            </div>
            <p className='font-medium text-center py-4 dark:text-white_700  bg-white_500 dark:bg-black_900'>Copyright @ {date} By Mr. Swadesh Pal</p>
        </div>
    )
}
export default Footer

const List = ({ data }) => {
    return (
        <li className='footerListStyle'>{data}</li>
    )
}