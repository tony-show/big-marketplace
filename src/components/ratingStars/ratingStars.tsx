import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import './ratingStars.sass'

interface IRatingStars {
  rating: number
}

const RatingStars: ReactFC<IRatingStars> = ({ rating }) => {
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={i < rating ? 'ic_star fill' : 'ic_star'} />
      )
    }
    return stars
  }

  return <div className='rating-stars'>{renderStars()}</div>
}
export default RatingStars
