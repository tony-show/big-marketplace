import categories from '@src/data/menuCategoriesData'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { IMenuCategory } from '@src/interfaces/menuCategories'
import { ReactFC } from '@src/interfaces/react'
import menuSlice from '@src/store/menu/menuSlice'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.sass'

interface IHandleData {
  category: IMenuCategory
  isMain?: boolean
  isSubLevel?: boolean
}

const Menu: ReactFC = () => {
  const [category, setCategory] = useState<IMenuCategory>(null)
  const [subCategory, setSubCategory] = useState<IMenuCategory>(null)
  const { isOpen } = useAppSelector((state) => state.menu)
  const dispatch = useAppDispatch()
  const { setIsOpen } = menuSlice.actions

  const closeMenu = () => {
    dispatch(setIsOpen(false))
  }

  const handleCategory = (data: IHandleData) => {
    if (data.isMain) {
      setCategory(data.category)
      setSubCategory(null)
    }
    if (data.isSubLevel) {
      setSubCategory(data.category)
    }
  }

  const renderCategories = (
    childrenCategories: IMenuCategory[],
    parentCategory?: IMenuCategory
  ) => {
    const menuItemClass = parentCategory
      ? 'menu__subcategory'
      : 'menu__category'

    const categoriesList = childrenCategories.map((item) => {
      const { id, name, route, icon, subCategories } = item
      const text = <span>{name}</span>

      if (parentCategory && subCategories) {
        return (
          <span
            onClick={() =>
              handleCategory({
                category: item,
                isSubLevel: true,
              })
            }
            className={menuItemClass}
          >
            {text}
            <i className='ic_arrow-right' />
          </span>
        )
      }
      return (
        <Link
          onMouseOver={() =>
            handleCategory({
              category: item,
              isMain: !!icon,
            })
          }
          onClick={closeMenu}
          className={menuItemClass}
          key={id}
          to={route}
        >
          {!parentCategory && <i className={icon} />}
          <div>{text}</div>
        </Link>
      )
    })
    return (
      <>
        {parentCategory && (
          <Link
            to={parentCategory.route}
            onClick={closeMenu}
            className='menu__link-title'
          >
            <h3 className='menu__title'>{parentCategory.name}</h3>
          </Link>
        )}
        {categoriesList}
      </>
    )
  }

  return (
    <div className={`menu__wrap ${isOpen ? 'open' : ''}`}>
      <nav
        className='menu'
        style={{
          gridTemplateColumns: `repeat(${!category ? 1 : 3}, 270px)`,
        }}
      >
        <div className='menu__list'>{renderCategories(categories)}</div>
        {category && (
          <>
            <div className='menu__list'>
              {renderCategories(category.subCategories, category)}
            </div>
            <div className='menu__list'>
              {subCategory &&
                renderCategories(subCategory.subCategories, subCategory)}
              {!subCategory && category?.img && (
                <img
                  className='menu__img'
                  src={category.img}
                  alt={category.name}
                />
              )}
            </div>
          </>
        )}
        <div className='menu__close' onClick={closeMenu}>
          Х
        </div>
      </nav>
    </div>
  )
}
export default Menu
