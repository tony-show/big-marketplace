import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import CategoryList from '@src/components/categoryList/categoryList'
import Filters from '@src/components/filters/filters'
import breadcrumbsHelpers from '@src/helpers/breadcrumbsHelpers'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import MainCategoryPage from './mainCategoryPage/mainCategoryPage'
import './productsPage.sass'
import SubCategoryPage from './subCategoryPage/subCategoryPage'

interface ICategoriesParams {
  category: string
  subcategory?: string
  innerSubcategory?: string
}

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
          {!params.subcategory && <CategoryList />}
          {params.subcategory && <Filters />}
        </div>
        <div className='main-category-page__content'>
          {!params.subcategory && <MainCategoryPage />}
          {params.subcategory && <SubCategoryPage />}
        </div>
      </main>
    </div>
  )
}
export default ProductsPage
