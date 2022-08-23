import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import Preloader from '@src/components/preloader/preloader'
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
      }, 1000)
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
    <div className='wrapper'>
      <Breadcrumbs data={getBreadcrumbsData()} />
      <h1>
        {product.brend} / {product.name} / {product.ram} / {product.ssd} /{' '}
        {product.color}
      </h1>
    </div>
  )
}
export default ProductPage
