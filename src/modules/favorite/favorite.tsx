import sortHelpers from '@src/helpers/sortHelpers'
import { useAppSelector } from '@src/hooks/redux'
import { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import SortTypeEnum from '@src/interfaces/sort'
import React, { useEffect, useState } from 'react'
import './favorite.sass'
import FavoriteActions from './favoriteActions/favoriteActions'
import FavoriteCard from './favoriteCard/favoriteCard'

const Favorite: ReactFC = () => {
  const { favorite } = useAppSelector((state) => state.user)
  const [filteredProducts, setFilteredProducts] = useState(favorite)
  const [sortType, setSortType] = useState(SortTypeEnum.addDateUp)

  const onSort = (type: SortTypeEnum) => {
    setSortType(type)
    const sortedProducts = sortHelpers.sortFavoriteProducts(type, [...favorite])
    setFilteredProducts(sortedProducts)
  }

  useEffect(() => {
    onSort(sortType)
  }, [favorite])

  const onSearch = (value: string) => {
    const reg = new RegExp(value, 'i')
    const searchedProducts = favorite.filter((product) => {
      return (
        reg.test(product.name) ||
        reg.test(product.brend.label) ||
        reg.test(ColorsEnum[product.color])
      )
    })
    setFilteredProducts(searchedProducts)
  }

  return (
    <div className='favorite'>
      <FavoriteActions onSort={onSort} onSearch={onSearch} />
      <div className='favorite__content'>
        <div className='favorite__products'>
          {filteredProducts.map((product) => (
            <FavoriteCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Favorite
