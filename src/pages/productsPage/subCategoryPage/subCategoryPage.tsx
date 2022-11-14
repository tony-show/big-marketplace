import CustomPagination from '@src/components/pagination/pagination'
import Preloader from '@src/components/preloader/preloader'
import ProductCard from '@src/components/productCard/productCard'
import sortHelpers from '@src/helpers/sortHelpers'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import SortTypeEnum from '@src/interfaces/sort'
import {
  changeSortType,
  changeViewType,
} from '@src/store/productsStore/productsStore'
import React, { ReactNode } from 'react'
import './subCategoryPage.sass'

const SubCategoryPage: ReactFC = () => {
  const dispatch = useAppDispatch()
  const { filteredProducts, sortType, viewType, isLoading, haveData } =
    useAppSelector((state) => state.products)

  const isPriceSortType =
    sortType === SortTypeEnum.priceUp || sortType === SortTypeEnum.priceDown

  const renderProducts = () => {
    const products: ReactNode[] = []
    const sortFilteredProducts = sortHelpers.sortProducts(
      sortType,
      filteredProducts
    )
    sortFilteredProducts.forEach((product: IProduct) => {
      products.push(<ProductCard key={product.id} product={product} />)
    })
    return products
  }

  const setSortType = (type: SortTypeEnum) => {
    if (type === SortTypeEnum.priceUp) {
      dispatch(changeSortType(SortTypeEnum.priceDown))
    } else if (type === SortTypeEnum.priceDown) {
      dispatch(changeSortType(SortTypeEnum.priceUp))
    } else {
      dispatch(changeSortType(type))
    }
  }

  const renderSortItems = () => {
    const sortTypes = [
      {
        name: 'Популярности',
        type: SortTypeEnum.popular,
      },
      {
        name: 'Рейтингу',
        type: SortTypeEnum.rating,
      },
      {
        name: 'Цене',
        type: isPriceSortType ? sortType : SortTypeEnum.priceUp,
      },
      {
        name: 'Скидке',
        type: SortTypeEnum.sale,
      },
      {
        name: 'Обновлению',
        type: SortTypeEnum.update,
      },
    ]

    return sortTypes.map((item) => {
      const klass =
        item.type === sortType ? 'sort__action active' : 'sort__action'
      const iconClass =
        item.type === SortTypeEnum.priceUp ? 'ic_arrow-up' : 'ic_arrow-down'
      return (
        <div
          key={item.type}
          className={klass}
          onClick={() => setSortType(item.type)}
        >
          <span>{item.name}</span>
          {item.name === 'Цене' && <i className={iconClass} />}
        </div>
      )
    })
  }

  const setViewType = (type: 'small' | 'big') => {
    dispatch(changeViewType(type))
  }

  if (isLoading || !haveData) return <Preloader />

  return (
    <>
      <div className='sort'>
        <div className='sort__actions'>
          <span className='sort__actions-label'>Сортировка по:</span>
          {renderSortItems()}
        </div>
        <div className='sort__view'>
          <i
            className={`ic_grid ${viewType === 'small' ? 'active' : ''}`}
            onClick={() => setViewType('small')}
          />
          <i
            className={`ic_grid-mini ${viewType === 'big' ? 'active' : ''}`}
            onClick={() => setViewType('big')}
          />
        </div>
      </div>
      {!!filteredProducts.length && (
        <>
          <div
            className={`sub-category-page__products ${
              viewType === 'big' ? 'big' : ''
            }`}
          >
            {renderProducts()}
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
