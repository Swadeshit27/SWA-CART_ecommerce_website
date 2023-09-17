
import Items from '../Components/Home/Items'
import About from '../Components/Home/About'
import CarouselContainer from '../Components/Home/Carousal'

const Home = () => {
  return (
    <div className='w-full min-h-screen py-6 md:py-12 md:px-4 '>
      <div>
        <CarouselContainer />
      </div>
      <div>
        <Items />
      </div>
      <About />
    </div>
  )
}

export default Home