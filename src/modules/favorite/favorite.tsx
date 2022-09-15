import generateProducts from '@src/data/products'
import sortHelpers from '@src/helpers/sortHelpers'
import { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import SortTypeEnum from '@src/interfaces/sort'
import React, { useState } from 'react'
import './favorite.sass'
import FavoriteActions from './favoriteActions/favoriteActions'
import FavoriteCard from './favoriteCard/favoriteCard'

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
