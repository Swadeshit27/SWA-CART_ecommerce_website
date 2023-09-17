import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdPayment } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'

const About = () => {
  return (
    <div className='w-full max-w-[1400px] my-20'>
      <h1 className='text-center font-semibold mb-4 text-orange-600 dark:text-orange-600'>WHY CHOOSE US ?</h1>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div>
          <img className='object-cover p-4 w-[80%] mx-auto my-auto' src="About.svg" alt="" />
        </div>
        <div className=' grid lg:col-span-2 p-4'>
          <h2 className='font-semibold '>Best Shopping Partner In The Country</h2>
          <h4 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores aspernatur a aut. Delectus magnam eos in, omnis accusantium, voluptatibus adipisci tempora quae ut beatae incidunt sequi recusandae dolorum? Sequi?</h4>
          <div className=' flex item-center flex-wrap gap-4 py-2 justify-between'>
            <div className=' flex items-center px-4 py-2 bg-orange-400 rounded-md text-white '><TbTruckDelivery size={20} className='me-2' />Free Delivery</div>
            <div className=' flex items-center px-4 py-2 bg-orange-400 rounded-md text-white '><MdPayment size={20} className='me-2' />Easy Payment</div>
            <div className=' flex items-center px-4 py-2 bg-orange-400 rounded-md text-white'><RiCustomerService2Fill size={20} className='me-2' />24/7 Service</div>
          </div>
          <button className='cartBtn my-6 text-xl'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default About