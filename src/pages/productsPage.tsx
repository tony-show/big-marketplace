import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'

const ProductsPage: ReactFC = () => (
  <div className='wrapper'>
    <Breadcrumbs />
    <h1>Список товаров</h1>
  </div>
)
export default ProductsPage
