import functionHelpers from '@src/helpers/functionHelpers'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
import IRating from '@src/interfaces/rating'
import { ReactFC } from '@src/interfaces/react'
import moment from 'moment'
import React, { useState } from 'react'
import './productCard.sass'

export interface IMiniProductCardProps {
  product: IProduct
}

const ProductCard: ReactFC<IMiniProductCardProps> = ({
  product: {
    id,
    name,
    link,
    brend,
    price,
    cover,
    sale,
    bage,
    ram,
    ssd,
    color,
    shipTime,
    credit,
    rating,
  },
}) => {
  const [toFavorite, setToFavorite] = useState(false)
  const originalPrice = functionHelpers.getDigitNumber(price)
  let priceWithSale: string | number = functionHelpers.getSalePrace(price, sale)
  priceWithSale = functionHelpers.getDigitNumber(priceWithSale)
  const shipDate = moment().locale('ru').add(shipTime, 'd').format('DD MMMM')

  const renderRating = ({ total, count }: IRating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= total) {
        stars.push(<i className='ic_star fill' />)
      } else {
        stars.push(<i className='ic_star' />)
      }
    }
    return (
      <>
        {stars}
        <span>{count}</span>
      </>
    )
  }

  return (
    <div className='product-card'>
      <div className='product-card__top'>
        <div className='product-card__bage'>{bage}</div>
        <img src={cover} alt={name} className='product-card__img' />
        <div className='product-card__sale'>-{sale}%</div>
      </div>
      <div className='product-card__bottom'>
        <div className='product-card__price'>
          <strong>{priceWithSale} ₽</strong>
          <span>{originalPrice} ₽</span>
        </div>
        <div className='product-card__params'>
          {brend} / {name} / {ram} / {ssd} / {ColorsEnum[color]}
        </div>
        <div className='product-card__rating'>{renderRating(rating)}</div>
        <div className='product-card__shipping'>
          <span>Доставка:&nbsp;</span>
          <strong>{shipDate}</strong>
        </div>
        <div className='product-card__credit'>{credit}</div>
        <div className='product-card__actions'>
          <div className='product-card__bay'>В корзину</div>
          <div className='product-card__favorite'>
            <i
              className={toFavorite ? 'ic_heart-fill' : 'ic_heart'}
              onClick={() => setToFavorite(!toFavorite)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
