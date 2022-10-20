import { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'
import './ordersPageContent.sass'
import OrderFilterTypeEnum from '@src/interfaces/filters'
import { useAppSelector } from '@src/hooks/redux'
import OrdersPageActions from './ordersPageActions/ordersPageActions'
import OrderCard from './orderCard/orderCard'

const OrdersPageContent: ReactFC = () => {
  const { bayed } = useAppSelector((state) => state.user)
  const [filteredProducts, setFilteredProducts] = useState(bayed)
  const [statusType, setStatusType] = useState<OrderFilterTypeEnum>(0)

  const onFiltering = (type: OrderFilterTypeEnum) => {
    setStatusType(type)
    if (type) {
      const filtered = bayed.filter((product) => product.orderStatus === type)
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(bayed)
    }
  }

  useEffect(() => {
    onFiltering(statusType)
  }, [bayed])

  const onSearch = (value: string) => {
    const reg = new RegExp(value, 'i')
    const searchedProducts = bayed.filter((product) => {
      return (
        reg.test(product.name) ||
        reg.test(product.brend.label) ||
        reg.test(ColorsEnum[product.color])
      )
    })
    setFilteredProducts(searchedProducts)
  }

  const addReview = (id: number) => {
    alert('Добавление отзыва!')
  }
  return (
    <div className='orders-page'>
      <OrdersPageActions onFiltering={onFiltering} onSearch={onSearch} />
      <div className='orders-page__content'>
        {!filteredProducts.length && <h1>Товары отсутствуют</h1>}
        {!!filteredProducts.length && (
          <div className='orders-page__products'>
            {filteredProducts.map((product) => (
              <OrderCard
                key={product.id}
                product={product}
                addReview={addReview}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default OrdersPageContent
