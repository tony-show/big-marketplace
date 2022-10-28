import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { useSwiper } from 'swiper/react'

interface IPreviewSlideProps {
  slideNum: number
  img: string
  changeActiveSlide: (slideId: number) => void
}

const PreviewSlide: ReactFC<IPreviewSlideProps> = ({
  slideNum,
  img,
  changeActiveSlide,
}) => {
  const swiper = useSwiper()

  const changeSlide = () => {
    swiper.slideTo(slideNum)
    changeActiveSlide(slideNum - 1)
  }

  return <img onMouseEnter={changeSlide} src={img} alt='Main page slide' />
}
export default PreviewSlide
