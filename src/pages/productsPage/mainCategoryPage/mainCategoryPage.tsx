import CollectionCard from '@src/components/collectionCard/collectionCard'
import MainPageSlider from '@src/components/mainPageSlider/mainPageSlider'
import MiniProductCard from '@src/components/miniProductCard/miniProductCard'
import generateProducts from '@src/data/products'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { ReactNode } from 'react'
import './mainCategoryPage.sass'

const MainCategoryPage: ReactFC = () => {
  const renderCollections = (num: number) => {
    const collections: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      collections.push(<CollectionCard key={i} id={i} />)
    }
    return collections
  }

  const renderProducts = (num: number) => {
    const productsData = generateProducts(num)
    const products: ReactNode[] = []
    productsData.forEach((productData: IProduct) => {
      products.push(
        <MiniProductCard key={productData.id} product={productData} />
      )
    })
    return products
  }

  return (
    <>
      <MainPageSlider />
      <div className='main-category-page__collections main-category-page__collections_3 main-category-page__block'>
        {renderCollections(8)}
      </div>
      <div className='main-category-page__block'>
        <h2>Популярные товары</h2>
        <div className='main-category-page__products'>{renderProducts(5)}</div>
      </div>
      <div className='main-category-page__collections main-category-page__collections_4 main-category-page__block'>
        {renderCollections(12)}
      </div>
      <div className='main-category-page__block'>
        <h2>Новинки</h2>
        <div className='main-category-page__products'>{renderProducts(5)}</div>
      </div>
    </>
  )
}
export default MainCategoryPage
