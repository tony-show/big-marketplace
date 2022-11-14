import CollectionCard from '@src/components/collectionCard/collectionCard'
import MainPageSlider from '@src/components/mainPageSlider/mainPageSlider'
import MiniProductCard from '@src/components/miniProductCard/miniProductCard'
import Preloader from '@src/components/preloader/preloader'
import { useAppSelector } from '@src/hooks/redux'
import { ReactFC } from '@src/interfaces/react'
import React, { ReactNode } from 'react'
import './mainCategoryPage.sass'

const MainCategoryPage: ReactFC = () => {
  const { isLoading, haveData, products } = useAppSelector(
    (state) => state.products
  )
  const renderCollections = (num: number) => {
    const collections: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      collections.push(<CollectionCard key={i} id={i} />)
    }
    return collections
  }

  const renderProducts = (num: number) => {
    const cutProducts: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      cutProducts.push(
        <MiniProductCard key={products[i].id} product={products[i]} />
      )
    }
    return cutProducts
  }

  if (isLoading || !haveData) return <Preloader />

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
