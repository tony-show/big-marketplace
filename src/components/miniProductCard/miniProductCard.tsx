import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './miniProductCard.sass'

export interface IMiniProductCardProps {
  product: IProduct
}

const MiniProductCard: ReactFC<IMiniProductCardProps> = ({
  product: { id, name, link, brend, price, img, sale },
}) => {
  return (
    <Link to={link} className='mini-product-card'>
      <div className='mini-product-card__img'>
        <img src={img} alt='Collection card' />
        {!!sale && <div className='mini-product-card__sale'>-{sale}%</div>}
      </div>
      <div className='mini-product-card__price'>{price} ₽</div>
      <div className='mini-product-card__link'>
        {brend} / {name}
      </div>
    </Link>
  )
}
export default MiniProductCard
