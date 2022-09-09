import functionHelpers from '@src/helpers/functionHelpers'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './favoriteCard.sass'

export interface IFavoriteCardProps {
  product: IProduct
  onDelete: (id: number) => void
  toCart: (id: number) => void
}

const FavoriteCard: ReactFC<IFavoriteCardProps> = ({
  product: { id, name, brend, price, cover, sale, bage, color, isAvailable },
  onDelete,
  toCart,
}) => {
  const originalPrice = functionHelpers.getDigitNumber(price)
  let priceWithSale: string | number = functionHelpers.getSalePrace(price, sale)
  priceWithSale = functionHelpers.getDigitNumber(priceWithSale)

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toCart(id)
    alert('Товар добавлен в корзину!')
  }

  const deleteProduct = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onDelete(id)
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
          {brend} / {name} / {ColorsEnum[color]}
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
