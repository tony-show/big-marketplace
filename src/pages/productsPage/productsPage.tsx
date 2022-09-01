import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import CategoryList from '@src/components/categoryList/categoryList'
import Filters from '@src/components/filters/filters'
import breadcrumbsHelpers from '@src/helpers/breadcrumbsHelpers'
import ICategoriesParams from '@src/interfaces/params'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import MainCategoryPage from './mainCategoryPage/mainCategoryPage'
import './productsPage.sass'
import SubCategoryPage from './subCategoryPage/subCategoryPage'

const ProductsPage: ReactFC = () => {
  const params: ICategoriesParams = useParams()
  const breadcrumbsData =
    breadcrumbsHelpers.getCategoriesBreadcrumbsData(params)

  return (
    <div className='wrapper'>
      {breadcrumbsData && <Breadcrumbs data={breadcrumbsData} />}
      <h1>Список товаров</h1>
      <main className='products'>
        <div className='main-category-page__sidebar'>
          {!params.subCategory && <CategoryList />}
          {params.subCategory && <Filters />}
        </div>
        <div className='main-category-page__content'>
          {!params.subCategory && <MainCategoryPage />}
          {params.subCategory && <SubCategoryPage />}
        </div>
      </main>
    </div>
  )
}
export default ProductsPage
