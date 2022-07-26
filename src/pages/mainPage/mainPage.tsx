import CollectionCard from '@src/components/collectionCard/collectionCard'
import MainPageSlider from '@src/components/mainPageSlider/mainPageSlider'
import MiniProductCard from '@src/components/miniProductCard/miniProductCard'
import generateProducts from '@src/data/products'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { ReactNode, useState } from 'react'
import './mainPage.sass'

const MainPage: ReactFC = () => {
  let count = 1
  const [productsCount, setProductsCount] = useState(42)

  const addMoreProducts = () => {
    count += 1
    setProductsCount(productsCount * count)
  }

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
    <div className='wrapper main'>
      <MainPageSlider />
      <div className='main__collections main__collections_4 main__block'>
        {renderCollections(8)}
      </div>
      <div className='main__block'>
        <h2>Возможно, Вам понравится</h2>
        <div className='main__products'>{renderProducts(14)}</div>
      </div>
      <div className='main__collections  main__block'>
        {renderCollections(2)}
      </div>
      <div className='main__products  main__block'>{renderProducts(14)}</div>
      <div className='main__collections  main__block'>
        {renderCollections(2)}
      </div>
      <div className='main__products  main__block'>
        {renderProducts(productsCount)}
      </div>
      <div className='main__more-btn' onClick={addMoreProducts}>
        <span>Показать ещё</span>
        <i className='ic_arrow-down' />
      </div>
    </div>
  )
}
export default MainPage
