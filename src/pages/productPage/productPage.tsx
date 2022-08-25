import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import Preloader from '@src/components/preloader/preloader'
import ProductInfo from '@src/components/productInfo/productInfo'
import RatingStars from '@src/components/ratingStars/ratingStars'
import breadcrumbsHelpers from '@src/helpers/breadcrumbsHelpers'
import IBreadcrumb from '@src/interfaces/breadcrumb'
import ICategoriesParams from '@src/interfaces/params'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './productPage.sass'

const productData: IProduct = {
  id: 1,
  name: 'MackBook Pro',
  brend: 'Apple',
  cover: `https://picsum.photos/id/1/400/300`,
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
  category: 'elektronika',
  subCategory: 'noutbuki',
}

const ProductPage: ReactFC = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<IProduct>()

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        setProduct(productData)
      }, 300)
    }
  }, [id])

  const getBreadcrumbsData = (): IBreadcrumb[] => {
    const params: ICategoriesParams = {
      category: product.category,
      subCategory: product.subCategory,
      innerSubCategory: product.innerSubCategory,
    }
    const breadcrumbs = breadcrumbsHelpers.getCategoriesBreadcrumbsData(params)
    breadcrumbs.push({
      label: product.name,
    })
    return breadcrumbs
  }

  if (!product) return <Preloader />

  return (
    <div className='product-page'>
      <Breadcrumbs data={getBreadcrumbsData()} />
      <h1 className='product__title'>
        {product.brend} / {product.name} / {product.ram} / {product.ssd} /{' '}
        {product.color}
      </h1>
      <div className='product__statistic'>
        <RatingStars rating={4} />
        <a href='#reviews' className='product__reviews-link'>
          6 отзывов
        </a>
        <div className='product__articul'>
          <span>Артикул:</span>
          <strong>113006388</strong>
        </div>
        <span>Купили более 40 раз</span>
      </div>
      <ProductInfo />
    </div>
  )
}
export default ProductPage
