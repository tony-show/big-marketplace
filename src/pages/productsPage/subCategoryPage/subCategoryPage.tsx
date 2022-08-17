import Filters from '@src/components/filters/filters'
import MiniProductCard from '@src/components/miniProductCard/miniProductCard'
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
        img: `https://picsum.photos/id/${i}/300/500`,
        price: Math.floor(Math.random() * 1000000),
        link: '/catalog/elektronika/telefony',
        sale: Math.floor(Math.random() * 100),
      }
      products.push(<MiniProductCard product={productData} />)
    }
    return products
  }

  return (
    <>
      <div className='sub-category-page__sort-panel'>Панель сортировки</div>
      {renderProducts(40)}
      <div>Постраничная навигация</div>
    </>
  )
}
export default SubCategoryPage
