import CollectionCard from '@src/components/collectionCard/collectionCard'
import MainPageSlider from '@src/components/mainPageSlider/mainPageSlider'
import MiniProductCard from '@src/components/miniProductCard/miniProductCard'
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
    const products: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      const finish = Math.floor(Math.random() * 100)
      const name = 'IPhone 13 Pro Max  asd asd asd asda'.substring(0, finish)
      const productData: IProduct = {
        id: i,
        name,
        brend: 'Apple',
        cover: `https://placeimg.com/300/500/tech?id=${i}`,
        price: Math.floor(Math.random() * 1000000),
        link: '/catalog/elektronika/telefony',
        sale: Math.floor(Math.random() * 100),
        color: 'black',
        ram: '2 Гб',
        ssd: '1 Тб',
        rating: {
          total: 5,
          count: 19,
        },
        seller: 'OZON',
        shipTime: 3,
      }
      products.push(<MiniProductCard product={productData} />)
    }
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
