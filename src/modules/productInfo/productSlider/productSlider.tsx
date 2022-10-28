import { ReactFC } from '@src/interfaces/react'
import { Pagination, Navigation, Autoplay, Thumbs } from 'swiper'
import React, { useState } from 'react'
import './productSlider.sass'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useAppSelector } from '@src/hooks/redux'
import PreviewSlide from './previewSlide'
import Slide from './slide'

// import required modules

const ProductSlider: ReactFC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const {
    product: { images },
  } = useAppSelector((state) => state.products)

  const renderPreviewsSlider = () => (
    <div className='previews'>
      <div className='previews-prev'>
        <i className='ic_arrow-up' />
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        direction='vertical'
        navigation={{
          prevEl: '.previews-prev',
          nextEl: '.previews-next',
        }}
        slidesPerView={5}
        spaceBetween={8}
        modules={[Pagination, Navigation, Autoplay, Thumbs]}
        className='product-slider previews-slider'
      >
        {images.map((item, idx) => (
          <SwiperSlide key={item}>
            <PreviewSlide
              img={item}
              slideNum={idx}
              changeActiveSlide={setActiveSlide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='previews-next'>
        <i className='ic_arrow-down' />
      </div>
    </div>
  )

  const renderSlider = () => (
    <Swiper
      thumbs={{ swiper: thumbsSwiper }}
      navigation
      modules={[Pagination, Navigation, Autoplay, Thumbs]}
      className='product-slider'
    >
      {images.map((item) => (
        <SwiperSlide key={item}>
          <Slide
            img={item}
            activeSlide={activeSlide}
            className='product-slider__zoom-img'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )

  return (
    <div className='product-slider-wrap'>
      {renderPreviewsSlider()}
      {renderSlider()}
    </div>
  )
}
export default ProductSlider
