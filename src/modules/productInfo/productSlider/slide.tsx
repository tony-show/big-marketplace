import { ReactFC } from '@src/interfaces/react'
import React, { useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import ContentZoom from 'react-content-zoom'

interface IPreviewSlideProps {
  img: string
  activeSlide: number
  className: string
}

const Slide: ReactFC<IPreviewSlideProps> = ({
  img,
  activeSlide,
  className,
}) => {
  const swiper = useSwiper()

  useEffect(() => {
    swiper.slideTo(activeSlide)
  }, [activeSlide])

  return (
    <div className={className}>
      <ContentZoom zoomPercent={350} largeImageUrl={img} imageUrl={img} />
    </div>
  )
}
export default Slide
