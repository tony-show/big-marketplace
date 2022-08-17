import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import MainCategoryPage from './mainCategoryPage/mainCategoryPage'
import './productsPage.sass'

const ProductsPage: ReactFC = () => {
  return (
    <div className='wrapper'>
      <Breadcrumbs />
      <h1>Список товаров</h1>
      <main className='products'>
        <MainCategoryPage />
      </main>
    </div>
  )
}
export default ProductsPage
