import functionHelpers from '@src/helpers/functionHelpers'
import priceHelpers from '@src/helpers/priceHelpers'
import { useAppDispatch } from '@src/hooks/redux'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import { addToBasket, deleteFromFavorite } from '@src/store/userStore/actions'
import React from 'react'
import { Link } from 'react-router-dom'
import './favoriteCard.sass'

export interface IFavoriteCardProps {
  product: IProduct
}

const FavoriteCard: ReactFC<IFavoriteCardProps> = ({ product }) => {
  const { id, name, brend, price, cover, sale, bage, color, isAvailable } =
    product
  const dispatch = useAppDispatch()
  const originalPrice = functionHelpers.getDigitNumber(price)
  let priceWithSale: string | number = priceHelpers.getSalePrace(price, sale)
  priceWithSale = functionHelpers.getDigitNumber(priceWithSale)

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToBasket(product))
    alert('Товар добавлен в корзину!')
  }

  const deleteProduct = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(deleteFromFavorite(id))
  }

  return (
    <Link to={`/product/${id}`} className='favorite-card'>
      <div className='favorite-card__top'>
        <div className='favorite-card__bage'>{bage}</div>
        <div className='favorite-card__img'>
          <img src={cover} alt={name} />
        </div>
        <div className='favorite-card__sale'>
          -{sale}% {isAvailable ? 'Продается' : 'Не продается'}
        </div>
        <div className='favorite-card__delete' onClick={deleteProduct}>
          <i className='ic_close' />
        </div>
      </div>
      <div className='favorite-card__bottom'>
        <div className='favorite-card__price'>
          <strong>{priceWithSale} ₽</strong>
          <span>{originalPrice} ₽</span>
        </div>
        <div className='favorite-card__params'>
          {brend.label} / {name} / {ColorsEnum[color]}
        </div>
        <div className='favorite-card__actions'>
          <div className='favorite-card__bay' onClick={addToCart}>
            В корзину
          </div>
        </div>
      </div>
    </Link>
  )
}
export default FavoriteCard
