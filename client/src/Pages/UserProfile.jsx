import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const user = useSelector(state => state.user);
  console.log(user);
  const { email, mobile, name, photo } = user;

  return (
    <div className='w-[95%] md:w-[40rem] mx-auto my-8 min-h-[10rem] rounded-md shadow-lg p-8 bg-white_900 dark:bg-black_900 text-black_500 dark:text-white_500'>
      <h1 className='text-center text-orange-500 mb-6'>My profile</h1>
      <div className="flex flex-col md:flex-row items-center ">
        <img src={`http://localhost:6001/assets/${photo}`} alt="myphoto" className='w-[10rem] h-[10rem] object-contain ' />
        <div className='flex flex-col justify-center ms-4'>
          <p className='text-xl font-semibold'>{name}</p>
          <p className='text-xl font-semibold'>{email}</p>
          <p className='text-xl font-semibold'>{mobile}</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
