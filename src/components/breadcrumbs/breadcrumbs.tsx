import categories from '@src/data/menuCategoriesData'
import { IMenuCategory } from '@src/interfaces/menuCategories'
import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import React, { Fragment, ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import './breadcrumbs.sass'

interface ICategoriesParams {
  category: string
  subcategory?: string
  innerSubcategory?: string
}

interface IOptions {
  categories: IMenuCategory[]
  path: string
  html: ReactNode[]
  params: string[]
  i: number
}

const Breadcrumbs: ReactFC = () => {
  const params: ICategoriesParams = useParams()

  const renderLinks = (
    categoriesArr: IMenuCategory[],
    paramsObj: ICategoriesParams
  ) => {
    const { category, subcategory, innerSubcategory } = paramsObj
    const paramsArr = [category, subcategory, innerSubcategory]
    const options: IOptions = {
      categories: categoriesArr,
      params: paramsArr,
      path: '/catalog',
      html: [],
      i: 0,
    }

    const getCategory = (data: IOptions): IMenuCategory => {
      for (let i = 0; i < data.categories.length; i++) {
        if (data.categories[i].route === data.path) {
          const { route, name } = data.categories[i]
          data.html.push(
            <Fragment key={route}>
              <span>/</span>
              {data.params[data.i + 1] ? (
                <Link to={route}>{name}</Link>
              ) : (
                <div>{name}</div>
              )}
            </Fragment>
          )
          return data.categories[i]
        }
      }
      return null
    }
    const buildBreadcrumbs = (data: IOptions) => {
      const { i } = data
      data.path += `/${data.params[i]}`
      const matchCategory = getCategory(data)
      if (data.params[i + 1] && matchCategory?.subCategories) {
        data.i += 1
        data.categories = matchCategory.subCategories
        buildBreadcrumbs(data)
      }
    }
    buildBreadcrumbs(options)

    return options.html
  }

  return (
    <div className='breadcrumbs'>
      <Link to={routing.home}>Главная</Link>
      {renderLinks(categories, params)}
    </div>
  )
}
export default Breadcrumbs
