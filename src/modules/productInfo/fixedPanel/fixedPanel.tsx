import Button from '@src/components/button/button'
import RatingStars from '@src/components/ratingStars/ratingStars'
import functionHelpers from '@src/helpers/functionHelpers'
import priceHelpers from '@src/helpers/priceHelpers'
import productHelpers from '@src/helpers/productHelpers'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import {
  addToBasket,
  addToFavorite,
  deleteFromFavorite,
} from '@src/store/userStore/actions'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './fixedPanel.sass'

const FixedPanel: ReactFC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
  const {
    products: { product },
    user: { basket, favorite },
  } = useAppSelector((state) => state)
  const navigate = useNavigate()
  const priceWithSale = priceHelpers.getSalePrace(product.price, product.sale)
  const haveProductInBasket = productHelpers.haveProduct(product.id, basket)
  const haveProductInFavorite = productHelpers.haveProduct(product.id, favorite)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsOpen(window.scrollY > 500)
    })
  }, [])

  const handleFavorite = () => {
    if (haveProductInFavorite) {
      dispatch(deleteFromFavorite(product.id))
    } else {
      dispatch(addToFavorite(product))
    }
  }

  const buyNow = () => {
    if (!haveProductInBasket) {
      dispatch(addToBasket(product))
    }
    navigate(routing.basket)
  }

  return (
    <div className={`fixed-panel ${isOpen ? 'open' : ''}`}>
      <div className='container'>
        <img src={product.cover} alt='Товар' className='fixed-panel__img' />
        <div className='fixed-panel__main'>
          <div className='fixed-panel__title'>
            <strong>{product.brend.label}</strong>
            <span>
              / {product.name} / {product.ram} / {product.ssd} / {product.color}
            </span>
          </div>
          <div className='fixed-panel__stat'>
            <RatingStars rating={product.rating.total} />
            <a href='#reviews' className='fixed-panel__reviews-link'>
              6 отзывов
            </a>
          </div>
        </div>
        <div className='fixed-panel__price'>
          <strong>{functionHelpers.getDigitNumber(priceWithSale)} ₽</strong>
          <span>{functionHelpers.getDigitNumber(product.price)} ₽</span>
        </div>
        <div className='fixed-panel__actions'>
          <Button theme='outline' onClick={buyNow}>
            Купить сейчас
          </Button>
          <Button
            onClick={() => dispatch(addToBasket(product))}
            disable={haveProductInBasket}
          >
            {haveProductInBasket ? 'Добавлено в корзину' : 'Добавить в корзину'}
          </Button>
          <i
            className={`ic_heart${
              haveProductInFavorite ? '-fill active' : ''
            } fixed-panel__to-favorite`}
            onClick={handleFavorite}
          />
        </div>
      </div>
    </div>
  )
}
export default FixedPanel
