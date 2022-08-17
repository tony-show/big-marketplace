import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import CategoryList from '@src/components/categoryList/categoryList'
import Filters from '@src/components/filters/filters'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import MainCategoryPage from './mainCategoryPage/mainCategoryPage'
import './productsPage.sass'
import SubCategoryPage from './subCategoryPage/subCategoryPage'

const ProductsPage: ReactFC = () => {
  const { subcategory } = useParams()
  return (
    <div className='wrapper'>
      <Breadcrumbs />
      <h1>Список товаров</h1>
      <main className='products'>
        <div className='main-category-page__sidebar'>
          {!subcategory && <CategoryList />}
          {subcategory && <Filters />}
        </div>
        <div className='main-category-page__content'>
          {!subcategory && <MainCategoryPage />}
          {subcategory && <SubCategoryPage />}
        </div>
      </main>
    </div>
  )
}
export default ProductsPage
