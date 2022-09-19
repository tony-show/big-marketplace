import { ReactFC } from '@src/interfaces/react'
import OrdersPageContent from '@src/modules/ordersPageContent/ordersPageContent'
import React from 'react'

const OrdersPage: ReactFC = () => {
  return (
    <div className='orders-page'>
      <OrdersPageContent />
    </div>
  )
}
export default OrdersPage
