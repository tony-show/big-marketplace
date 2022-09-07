import Filters from '@src/components/filters/filters'
import MiniProductCard from '@src/components/miniProductCard/miniProductCard'
import CustomPagination from '@src/components/pagination/pagination'
import ProductCard from '@src/components/productCard/productCard'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { ReactNode } from 'react'
import './subCategoryPage.sass'

const SubCategoryPage: ReactFC = () => {
  const renderProducts = (num: number) => {
    const products: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      const finish = Math.floor(Math.random() * 100)
      const name = 'IPhone 13 Pro Max  asd asd asd asda'.substring(0, finish)
      const productData: IProduct = {
        id: i,
        name,
        brend: 'Apple',
        cover: `https://placeimg.com/400/300/tech?id=${i}`,
        price: Math.floor(Math.random() * 1000000),
        link: '/catalog/elektronika/telefony',
        sale: Math.floor(Math.random() * 100),
        color: 'black',
        ram: '2 Гб',
        ssd: '1 Тб',
        rating: {
          total: 3,
          count: 19,
        },
        seller: 'OZON',
        shipTime: 3,
        bage: 'new',
        credit: 'РАССРОЧКА ОТ 0-0-6!',
      }
      products.push(<ProductCard key={i} product={productData} />)
    }
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
      <div className='sub-category-page__products'>{renderProducts(40)}</div>
      <CustomPagination />
    </>
  )
}
export default SubCategoryPage
