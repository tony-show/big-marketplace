import SelectCount from '@src/components/selectCount/selectCount'
import functionHelpers from '@src/helpers/functionHelpers'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './basketListItem.sass'

interface IBasketListItemProps {
  product: IProduct
  toFavorite: (id: number) => void
  onDelete: (id: number) => void
  changeCount: (id: number, count: number) => void
  onChacked: (id: number, checked: boolean) => void
}

const BasketListItem: ReactFC<IBasketListItemProps> = ({
  product,
  toFavorite,
  onDelete,
  changeCount,
  onChacked,
}) => {
  const getPriceWithSale = () => {
    const priceWithSale = functionHelpers.getSalePrace(
      product.price * product.selectedCount,
      product.sale
    )
    return functionHelpers.getDigitNumber(priceWithSale)
  }
  const getFullPrice = () => {
    const fullPrice = product.price * product.selectedCount
    return functionHelpers.getDigitNumber(fullPrice)
  }

  const changeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChacked(product.id, e.target.checked)
  }

  return (
    <div className='basket-product'>
      <Form.Check
        type='checkbox'
        onChange={changeChecked}
        checked={product.checked}
      />
      <Link to={`/product/${product.id}`}>
        <img
          src={product.cover}
          alt={product.name}
          className='basket-product__img'
        />
      </Link>
      <div className='basket-product__info'>
        <Link to={`/product/${product.id}`} className='basket-product__title'>
          {product.name} / {product.ram} / {product.ssd}
        </Link>
        {product.selectedColor && (
          <span>Цвет: {ColorsEnum[product.selectedColor]}</span>
        )}
        {product.warehouse && <span>{product.warehouse}</span>}
      </div>
      <div className='basket-product__actions'>
        <SelectCount
          min={1}
          initial={product.selectedCount}
          onChange={(count) => {
            changeCount(product.id, count)
          }}
        />
        <div className='basket-product__links'>
          <span onClick={() => toFavorite(product.id)}>В избранное</span>
          <span onClick={() => onDelete(product.id)}>Удалить</span>
        </div>
      </div>
      <div className='basket-product__price'>
        <strong>{getPriceWithSale()} ₽</strong>
        <span>{getFullPrice()} ₽</span>
        <div>рассрочка 1 956 ₽/мес</div>
      </div>
    </div>
  )
}
export default BasketListItem
