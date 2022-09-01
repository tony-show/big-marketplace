import Button from '@src/components/button/button'
import functionHelpers from '@src/helpers/functionHelpers'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import './productActions.sass'

const ProductActions: ReactFC = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [inCart, setInCart] = useState(false)

  return (
    <div className='product-actions'>
      <div className='product-actions__top'>
        <div className='product-actions__price'>
          <strong>{functionHelpers.getDigitNumber(126556)} ₽</strong>
          <span>{functionHelpers.getDigitNumber(218200)} ₽</span>
        </div>
        <i
          className={`ic_heart${
            isFavorite ? '-fill active' : ''
          } product-actions__to-favorite`}
          onClick={() => setIsFavorite(!isFavorite)}
        />
      </div>
      <div className='product-actions__credit'>
        <span>В кредит от</span>
        <strong>{functionHelpers.getDigitNumber(12655)} ₽</strong>
      </div>
      <Button onClick={() => setInCart(!inCart)}>
        {inCart ? 'Добавлено в корзину' : 'Добавить в корзину'}
      </Button>
      <Button theme='outline' onClick={() => alert('Купим чуть позже ;)')}>
        Купить сейчас
      </Button>
      <div className='product-actions__ship'>
        <strong>29-31 августа</strong>
        <span>доставит Wildberries со склада Коледино WB</span>
      </div>
    </div>
  )
}
export default ProductActions
