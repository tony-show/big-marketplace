import CustomPagination from '@src/components/pagination/pagination'
import ProductCard from '@src/components/productCard/productCard'
import generateProducts from '@src/data/products'
import { useAppSelector } from '@src/hooks/redux'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { ReactNode } from 'react'
import './subCategoryPage.sass'

const SubCategoryPage: ReactFC = () => {
  const { filteredProducts } = useAppSelector((state) => state.products)

  const renderProducts = (num: number) => {
    const products: ReactNode[] = []
    filteredProducts.forEach((product: IProduct) => {
      products.push(<ProductCard key={product.id} product={product} />)
    })
    return products
  }

  return (
    <>
      <div className='sort'>
        <div className='sort__actions'>
          <span className='sort__actions-label'>Сортировка про:</span>
          <div className='sort__action active'>Популярности</div>
          <div className='sort__action'>Рейтингу</div>
          <div className='sort__action'>
            <span>Цене</span>
            <i className='ic_arrow-down' />
          </div>
          <div className='sort__action'>Скидке</div>
          <div className='sort__action'>Обновлению</div>
        </div>
        <div className='sort__view'>
          <i className='ic_grid active' />
          <i className='ic_grid-mini' />
        </div>
      </div>
      {!!filteredProducts.length && (
        <>
          <div className='sub-category-page__products'>
            {renderProducts(40)}
          </div>
          <CustomPagination />
        </>
      )}
      {!filteredProducts.length && (
        <h3>
          По заданным параметрам товары не найдены. Измените критерии поиска.
        </h3>
      )}
    </>
  )
}
export default SubCategoryPage
