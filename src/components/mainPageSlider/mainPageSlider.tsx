import { ReactFC } from '@src/interfaces/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import React from 'react'
import './mainPageSlider.sass'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules

const MainPageSlider: ReactFC = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      modules={[Pagination, Navigation, Autoplay]}
      className='main-page-slider'
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <SwiperSlide key={item}>
          <img
            src={`https://placeimg.com/1920/300/tech?id=${item}`}
            alt='Main page slide'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default MainPageSlider
