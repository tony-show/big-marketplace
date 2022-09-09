import functionHelpers from '@src/helpers/functionHelpers'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './basketList.sass'
import BasketListItem from './basketListItem/basketListItem'

interface IBasketListProps {
  products: IProduct[]
  changeCount: (id: number, count: number) => void
  onDelete: (id: number) => void
  toFavorite: (id: number) => void
  onChecked: (id: number, checked: boolean) => void
  checkedAll: boolean
  onCheckedAll: (checkedAll: boolean) => void
}

const BasketList: ReactFC<IBasketListProps> = ({
  products,
  changeCount,
  onDelete,
  toFavorite,
  onChecked,
  checkedAll,
  onCheckedAll,
}) => {
  const [isOpen, setIsOpen] = useState(true)

  const onChangeCheckedAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedAll(e.target.checked)
  }

  const renderStatInfo = () => {
    const initialStat = {
      count: 0,
      price: 0,
    }
    const statInfo = products.reduce((total, item) => {
      return {
        count: total.count + item.selectedCount,
        price:
          total.price + functionHelpers.getSalePrace(item.price, item.sale),
      }
    }, initialStat)
    return (
      <div className='basket-list__stat'>
        {statInfo.count} товара -{' '}
        {functionHelpers.getDigitNumber(statInfo.price)} ₽
      </div>
    )
  }

  return (
    <div className='basket-list'>
      <div className='basket-list__head'>
        <div className='basket-list__check-all'>
          {isOpen && (
            <Form.Check
              type='checkbox'
              id='basket-check-all'
              label='Выбрать все'
              checked={checkedAll}
              onChange={onChangeCheckedAll}
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
      </div>
      <div className={`basket-list__products ${isOpen ? '' : 'hide'}`}>
        {!!products.length &&
          products.map((product) => (
            <BasketListItem
              onDelete={onDelete}
              toFavorite={toFavorite}
              key={product.id}
              product={product}
              changeCount={changeCount}
              onChacked={onChecked}
            />
          ))}
        {!products.length && <h3>Корзина пуста</h3>}
      </div>
    </div>
  )
}
export default BasketList
