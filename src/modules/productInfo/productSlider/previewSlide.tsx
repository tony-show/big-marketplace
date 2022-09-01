import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { useSwiper } from 'swiper/react'

interface IPreviewSlideProps {
  slide: number
  changeActiveSlide: (slideId: number) => void
}

const PreviewSlide: ReactFC<IPreviewSlideProps> = ({
  slide,
  changeActiveSlide,
}) => {
  const swiper = useSwiper()

  const changeSlide = () => {
    swiper.slideTo(slide)
    changeActiveSlide(slide - 1)
  }

  return (
    <img
      onMouseEnter={changeSlide}
      src={`https://picsum.photos/id/${slide}/1920/1080`}
      alt='Main page slide'
    />
  )
}
export default PreviewSlide