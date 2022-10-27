import functionHelpers from '@src/helpers/functionHelpers'
import priceHelpers from '@src/helpers/priceHelpers'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { ReactFC } from '@src/interfaces/react'
import { changeAllInOrderStatus } from '@src/store/userStore/userStore'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './basketList.sass'
import BasketListItem from './basketListItem/basketListItem'

const BasketList: ReactFC = () => {
  const dispatch = useAppDispatch()
  const { basket } = useAppSelector((state) => state.user)
  const [isOpen, setIsOpen] = useState(true)
  const isAllInOrder = basket.every((product) => product.inOrder)

  const renderStatInfo = () => {
    const { count, salePrice } = priceHelpers.getOrderInfo(basket)
    return (
      <div className='basket-list__stat'>
        {count} товара - {functionHelpers.getDigitNumber(salePrice)} ₽
      </div>
    )
  }

  return (
    <div className='basket-list'>
      <div className='basket-list__head'>
        {!!basket.length && (
          <div className='basket-list__check-all'>
            {isOpen && (
              <Form.Check
                type='checkbox'
                id='basket-check-all'
                label='Выбрать все'
                checked={isAllInOrder}
                onChange={() => dispatch(changeAllInOrderStatus(!isAllInOrder))}
              />
            )}
            {!isOpen && renderStatInfo()}
            <div
              className='basket-list__close'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '-' : '+'}
            </div>
          </div>
        )}
      </div>
      <div className={`basket-list__products ${isOpen ? '' : 'hide'}`}>
        {!!basket.length &&
          basket.map((product) => (
            <BasketListItem key={product.id} product={product} />
          ))}
        {!basket.length && <h3>Корзина пуста</h3>}
      </div>
    </div>
  )
}
export default BasketList
