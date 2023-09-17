
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-full max-sm:h-[15rem] h-[20rem]">
                        <img
                            alt="..."
                            src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-fall-season-celebration_23-2150671840.jpg?size=626&ext=jpg&ga=GA1.2.188362780.1679900037&semt=sph"
                            className='w-full h-full object-fill'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full max-sm:h-[15rem] h-[20rem]">
                        <img
                            alt="..."
                            src="https://img.freepik.com/free-vector/realistic-3d-sale-background_52683-62689.jpg?size=626&ext=jpg&ga=GA1.1.188362780.1679900037&semt=sph"
                            className='w-full h-full object-fill'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full max-sm:h-[15rem] h-[20rem]">
                        <img
                            alt="..."
                            src="https://img.freepik.com/free-vector/10-10-online-shopping-day-sale-banner_87202-1081.jpg?size=626&ext=jpg&ga=GA1.1.188362780.1679900037&semt=sph"
                            className='w-full h-full object-fill'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full max-sm:h-[15rem] h-[20rem]">
                        <img
                            alt="..."
                            src="https://img.freepik.com/free-vector/mega-sale-offers-banner-template_1017-31299.jpg?size=626&ext=jpg&ga=GA1.1.188362780.1679900037&semt=sph"
                            className='w-full h-full object-fill'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full max-sm:h-[15rem] h-[20rem]">
                        <img
                            alt="..."
                            src="https://img.freepik.com/free-vector/gradient-discount-numbers-set_52683-90172.jpg?size=626&ext=jpg&ga=GA1.1.188362780.1679900037&semt=sph"
                            className='w-full h-full object-fill'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
