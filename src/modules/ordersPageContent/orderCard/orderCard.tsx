import functionHelpers from '@src/helpers/functionHelpers'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import moment from 'moment'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './orderCard.sass'

export interface IOrderCardProps {
  product: IProduct
  addReview: (id: number) => void
  onHide: (id: number) => void
}

const OrderCard: ReactFC<IOrderCardProps> = ({
  product: {
    id,
    name,
    brend,
    price,
    cover,
    sale,
    bage,
    color,
    orderDate,
    getDate,
  },
  addReview,
  onHide,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isRefund, setIsRefund] = useState(false)
  let priceWithSale: string | number = functionHelpers.getSalePrace(price, sale)
  priceWithSale = functionHelpers.getDigitNumber(priceWithSale)

  const onAddReview = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addReview(id)
  }

  const openHideMenu = (e: React.MouseEvent, isOpen: boolean) => {
    e.preventDefault()
    e.stopPropagation()
    setMenuIsOpen(isOpen)
  }

  const addToRefund = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setMenuIsOpen(false)
    setIsRefund(true)
  }

  const hideProduct = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onHide(id)
  }

  return (
    <Link
      to={`/product/${id}`}
      className='order-card'
      onMouseLeave={(e) => openHideMenu(e, false)}
    >
      <div className='order-card__top'>
        <div className='order-card__bage'>{bage}</div>
        <div className='order-card__img'>
          <img src={cover} alt={name} />
        </div>
      </div>
      <div className='order-card__bottom'>
        <div className='order-card__price'>
          <strong>{priceWithSale} ₽</strong>
          <div
            className='order-card__menu'
            onClick={(e) => openHideMenu(e, !menuIsOpen)}
          >
            <div
              className={`order-card__menu-popup ${menuIsOpen ? 'open' : ''}`}
            >
              <div onClick={hideProduct}>
                <span>Не показывать в покупках</span>
              </div>
              {!isRefund && (
                <div onClick={(e) => addToRefund(e)}>
                  <span>Оформить возврат -</span> <strong>100 ₽</strong>
                </div>
              )}
            </div>
            <i className='ic_menu_dots' />
          </div>
        </div>
        <div className='order-card__params'>
          {brend.label} / {name} / {ColorsEnum[color]}
        </div>
        <div className='order-card__date'>
          <span>Заказ</span>
          <strong>{moment(orderDate).format('D MMMM')}</strong>
        </div>
        <div className='order-card__date'>
          <span>Получение</span>
          <strong>{moment(getDate).format('D MMMM')}</strong>
        </div>
        {isRefund && (
          <div className='order-card__refund'>На оформлении возврата</div>
        )}
        <div className='order-card__actions'>
          <div className='order-card__add-review' onClick={onAddReview}>
            Написать отзыв
          </div>
        </div>
      </div>
    </Link>
  )
}
export default OrderCard
