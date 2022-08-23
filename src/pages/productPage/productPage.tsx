import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import './productPage.sass'

const ProductPage: ReactFC = () => {
  const params = useParams()
  console.log(params)
  return (
    <div className='wrapper'>
      <h1>Страница товара</h1>
    </div>
  )
}
export default ProductPage
