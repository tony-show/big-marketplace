import functionHelpers from '@src/helpers/functionHelpers'
import sortHelpers from '@src/helpers/sortHelpers'
import { ColorsEnum, IFavoriteProduct } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import SortTypeEnum from '@src/interfaces/sort'
import moment from 'moment'
import React, { useState } from 'react'
import './favorite.sass'
import FavoriteActions from './favoriteActions/favoriteActions'
import FavoriteCard from './favoriteCard/favoriteCard'

const generateProducts = (num: number) => {
  const products: IFavoriteProduct[] = []

  for (let i = 0; i < num; i++) {
    const names = ['IPhone 13 Pro Max', 'Mackbook Pro', 'Super Vision']
    const brends = ['Apple', 'Samsung', 'LG']
    const colors = ['black', 'blue', 'green', 'yellow', 'red', 'white']
    const nameId = Math.floor(Math.random() * names.length)
    const brendId = Math.floor(Math.random() * brends.length)
    const colorId = Math.floor(Math.random() * colors.length)
    const productData: IFavoriteProduct = {
      id: i,
      name: names[nameId],
      brend: brends[brendId],
      cover: `https://placeimg.com/400/300/tech?id=${i}`,
      price: Math.floor(Math.random() * 1000000),
      link: '/catalog/elektronika/telefony',
      sale: Math.floor(Math.random() * 100),
      color: colors[colorId] as
        | 'black'
        | 'blue'
        | 'green'
        | 'yellow'
        | 'red'
        | 'white',
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
      isAvailable: !!Math.round(Math.random()),
      addToFavoriteDate: moment(
        Date.now() - Math.floor(Math.random() * 1000000000)
      ),
    }
    products.push(productData)
  }
  return products
}
const productsData = generateProducts(30)

const Favorite: ReactFC = () => {
  const [products, setProducts] = useState(productsData)
  const [filteredProducts, setFilteredProducts] = useState(productsData)

  const onSort = (type: SortTypeEnum) => {
    const sortedProducts = sortHelpers.sortFavoriteProducts(type, products)
    setFilteredProducts(sortedProducts)
  }

  const onSearch = (value: string) => {
    const reg = new RegExp(value, 'i')
    const searchedProducts = products.filter((product) => {
      return (
        reg.test(product.name) ||
        reg.test(product.brend) ||
        reg.test(ColorsEnum[product.color])
      )
    })
    setFilteredProducts(searchedProducts)
  }

  const deleteFromFavorite = (id: number) => {
    const filtered = products.filter((product) => product.id !== id)
    setProducts(filtered)
    setFilteredProducts(filtered)
  }

  const addToCart = (id: number) => {
    const filtered = products.filter((product) => product.id !== id)
    setProducts(filtered)
    setFilteredProducts(filtered)
  }

  return (
    <div className='favorite'>
      <FavoriteActions onSort={onSort} onSearch={onSearch} />
      <div className='favorite__content'>
        <div className='favorite__products'>
          {filteredProducts.map((product) => (
            <FavoriteCard
              key={product.id}
              product={product}
              onDelete={deleteFromFavorite}
              toCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Favorite
