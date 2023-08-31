import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdPayment } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'

const About = () => {
  return (
    <div className='container-2 mt-20'>
      <p className='para-heading'>About Us</p>
      <h1 className='heading text-center'>WHY CHOOSE US ?</h1>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div>
          <img className='object-cover p-4 w-[80%] mx-auto my-auto' src="https://img.freepik.com/premium-photo/plate-dumplings-with-green-garnish-top_787273-1770.jpg?w=740" alt="" />
        </div>
        <div className=' grid lg:col-span-2 p-4'>
          <h1 className='heading'>Best Food In The Country</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores aspernatur a aut. Delectus magnam eos in, omnis accusantium, voluptatibus adipisci tempora quae ut beatae incidunt sequi recusandae dolorum? Sequi?</p>
          <div className=' flex item-center flex-wrap gap-4 py-2 justify-between'>
            <div className=' about-btn min-[580px]:w-[150px] '><TbTruckDelivery size={20} color='#006622' />Free Delivery</div>
            <div className=' about-btn  min-[580px]:w-[150px] '><MdPayment size={20} color='#006622' />Easy Payment</div>
            <div className=' about-btn  min-[580px]:w-[150px]'><RiCustomerService2Fill size={20} color='#006622' />24/7 Service</div>
          </div>
          <button className='btn h-12 mt-4'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default About