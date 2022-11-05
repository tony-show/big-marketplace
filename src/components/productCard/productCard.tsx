import functionHelpers from '@src/helpers/functionHelpers'
import priceHelpers from '@src/helpers/priceHelpers'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
import IRating from '@src/interfaces/rating'
import { ReactFC } from '@src/interfaces/react'
import { addToBasket, addToFavorite } from '@src/store/userStore/actions'
import moment from 'moment'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './productCard.sass'

export interface IMiniProductCardProps {
  product: IProduct
}

const ProductCard: ReactFC<IMiniProductCardProps> = ({ product }) => {
  const {
    id,
    name,
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
    soldCount,
    updated,
  } = product
  const dispatch = useAppDispatch()
  const { favorite } = useAppSelector((state) => state.user)
  const originalPrice = functionHelpers.getDigitNumber(price)
  let priceWithSale: string | number = priceHelpers.getSalePrace(price, sale)
  priceWithSale = functionHelpers.getDigitNumber(priceWithSale)
  const shipDate = moment().locale('ru').add(shipTime, 'd').format('DD MMMM')

  const renderRating = ({ total, count }: IRating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= total) {
        stars.push(<i key={i} className='ic_star fill' />)
      } else {
        stars.push(<i key={i} className='ic_star' />)
      }
    }
    return (
      <>
        {stars}
        <span>{count}</span>
      </>
    )
  }

  const toFavoriteHandle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToFavorite(product))
  }

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToBasket(product))
    alert('Товар добавлен в корзину!')
  }

  return (
    <Link to={`/product/${id}`} className='product-card'>
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
          {brend.value} / {name} / {ram} / {ssd} / {ColorsEnum[color]}
        </div>
        <div className='product-card__sold-count'>
          <span>Продано:</span>
          <strong>{soldCount}</strong>
        </div>
        <div className='product-card__rating'>{renderRating(rating)}</div>
        <div className='product-card__shipping'>
          <span>Доставка:&nbsp;</span>
          <strong>{shipDate}</strong>
        </div>
        <div className='product-card__shipping'>
          <span>Обновлен:&nbsp;</span>
          <strong>{moment(updated).format('DD.MM.YYYY')}</strong>
        </div>
        <div className='product-card__credit'>{credit}</div>
        <div className='product-card__actions'>
          <div className='product-card__bay' onClick={addToCart}>
            В корзину
          </div>
          <div className='product-card__favorite'>
            <i
              className={
                favorite.some((prod) => prod.id === id)
                  ? 'ic_heart-fill'
                  : 'ic_heart'
              }
              onClick={toFavoriteHandle}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
export default ProductCard
