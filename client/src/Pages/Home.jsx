import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full min-h-screen py-12 px-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 pl-2 items-center'>
        <div className='md:ml-8'>
          <p className='font-medium text-[#359f80] py-1'>Our Special Dish</p>
          <h1 className='md:text-6xl text-4xl font-bold text-[#000066] py-2'>Fried Chicken</h1>
          <p className='py-1 pr-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nostrum illo? Quod neque repudiandae expedita a? Tempore, expedita iusto.</p>
          <Link to='/items'>  <button className='btn mt-4'>Shop Now</button></Link>
        </div>
        <div>
          <img src="https://img.freepik.com/premium-photo/plate-with-roasted-turkey-white-background_392895-32237.jpg?w=740" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Home