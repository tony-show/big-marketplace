import { ReactFC } from '@src/interfaces/react'
import Favorite from '@src/modules/favorite/favorite'
import React from 'react'

const FavoritePage: ReactFC = () => {
  return (
    <div className='favorite'>
      <h1>Избранное</h1>
      <Favorite />
    </div>
  )
}
export default FavoritePage
