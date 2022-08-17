import categories from '@src/data/menuCategoriesData'
import { IMenuCategory } from '@src/interfaces/menuCategories'
import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './categoryList.sass'

const CategoryList: ReactFC = () => {
  const [mainCategory, setMainCategory] = useState<IMenuCategory>()
  const params = useParams()

  useEffect(() => {
    if (params.category) {
      const category = categories.find(
        (cat) => cat.route === `/catalog/${params.category}`
      )
      setMainCategory(category)
    }
  }, [params.category])

  const renderSubCategories = (categoriesArr: IMenuCategory[]) => {
    if (!categoriesArr) return null
    return categoriesArr.map((cat) => (
      <Link key={cat.id} to={cat.route}>
        {cat.name}
      </Link>
    ))
  }

  if (!mainCategory) return <h3>Категории не найдены</h3>
  return (
    <div className='category-list'>
      <h3 className='category-list__title'>Категории</h3>
      <div className='category-list__main-category'>{mainCategory.name}</div>
      <div className='category-list__links'>
        {renderSubCategories(mainCategory.subCategories)}
      </div>
    </div>
  )
}
export default CategoryList
