import { ReactFC } from '@src/interfaces/react'
import React, { useEffect } from 'react'
import { useSwiper } from 'swiper/react'

interface IPreviewSlideProps {
  slide: number
  activeSlide: number
}

const Slide: ReactFC<IPreviewSlideProps> = ({ slide, activeSlide }) => {
  const swiper = useSwiper()

  useEffect(() => {
    swiper.slideTo(activeSlide)
  }, [activeSlide])

  return (
    <img
      src={`https://picsum.photos/id/${slide}/1920/1080`}
      alt='Main page slide'
    />
  )
}
export default Slide
