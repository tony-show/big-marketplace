import generateProducts from '@src/data/products'
import { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'
import './ordersPageContent.sass'
import OrderFilterTypeEnum from '@src/interfaces/filters'
import OrdersPageActions from './ordersPageActions/ordersPageActions'
import OrderCard from './orderCard/orderCard'

const productsData = generateProducts(10)

const OrdersPageContent: ReactFC = () => {
  const [products, setProducts] = useState(productsData)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [statusType, setStatusType] = useState<OrderFilterTypeEnum>(0)

  const onFiltering = (type: OrderFilterTypeEnum) => {
    setStatusType(type)
    if (type) {
      const filtered = products.filter(
        (product) => product.orderStatus === type
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(products)
    }
  }

  useEffect(() => {
    onFiltering(statusType)
  }, [products])

  const onSearch = (value: string) => {
    const reg = new RegExp(value, 'i')
    const searchedProducts = products.filter((product) => {
      return (
        reg.test(product.name) ||
        reg.test(product.brend) ||
        reg.test(ColorsEnum[product.color])
      )
    })
    setFilteredProducts(searchedProducts)
  }

  const addReview = (id: number) => {
    alert('Добавление отзыва!')
  }

  const onHideProduct = (id: number) => {
    const updateProducts = products.filter((product) => product.id !== id)
    setProducts(updateProducts)
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
                onHide={onHideProduct}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default OrdersPageContent
