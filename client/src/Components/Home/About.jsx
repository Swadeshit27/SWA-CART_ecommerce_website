import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdPayment } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'

const About = () => {
  return (
    <div className='w-full max-w-[1400px] my-20'>
      <h1 className='heading text-center text-orange-600'>WHY CHOOSE US ?</h1>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div>
          <img className='object-cover p-4 w-[80%] mx-auto my-auto' src="About.svg" alt="" />
        </div>
        <div className=' grid lg:col-span-2 p-4'>
          <h4 className='text-xl md:text-4xl font-semibold text-blue-600'>Best Shopping Partner In The Country</h4>
          <p className='text-lg font-[600] text-black_500 dark:text-white_500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores aspernatur a aut. Delectus magnam eos in, omnis accusantium, voluptatibus adipisci tempora quae ut beatae incidunt sequi recusandae dolorum? Sequi?</p>
          <div className=' flex item-center flex-wrap gap-4 py-2 justify-between'>
            <div className=' about-btn min-[580px]:w-[150px] '><TbTruckDelivery size={20} color='#006622' />Free Delivery</div>
            <div className=' about-btn  min-[580px]:w-[150px] '><MdPayment size={20} color='#006622' />Easy Payment</div>
            <div className=' about-btn  min-[580px]:w-[150px]'><RiCustomerService2Fill size={20} color='#006622' />24/7 Service</div>
          </div>
          <button className='cartBtn my-4 text-xl'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default About