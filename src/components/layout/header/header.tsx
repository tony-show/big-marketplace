import Search from '@src/components/search/search'
import { useAppDispatch } from '@src/hooks/redux'
import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import menuSlice from '@src/store/menu/menuSlice'
import React from 'react'
import { Link } from 'react-router-dom'
import './header.sass'

const Header: ReactFC = () => {
  const dispatch = useAppDispatch()
  const { setIsOpen } = menuSlice.actions

  const openMenu = () => {
    dispatch(setIsOpen(true))
  }

  return (
    <div className='container'>
      <header className='header'>
        <div className='header__top'>
          <div>
            <div className='lang'>
              <div className='lang__selected'>Ru</div>
            </div>
            <Link to='/' className='user-location'>
              <i className='ic_map' />
              <span>Москва</span>
            </Link>
            <Link to={routing.services.shipping}>Бесплатная доставка</Link>
          </div>
          <div>
            <div className='message'>
              <i className='ic_chat' />
            </div>
          </div>
        </div>
        <div className='header__bottom'>
          <div className='menu-btn' onClick={openMenu}>
            <i className='ic_menu' />
          </div>
          <Link to={routing.home} className='logo'>
            TONYSHOW
          </Link>
          <Search />
          <Link to={routing.services.shipping} className='header__link'>
            <i className='ic_map' />
            <div>Адреса</div>
          </Link>
          <Link to={routing.login} className='header__link'>
            <i className='ic_user' />
            <div>Войти</div>
          </Link>
          <Link to={routing.basket} className='header__link'>
            <i className='ic_cart' />
            <div>Корзина</div>
          </Link>
        </div>
      </header>
    </div>
  )
}
export default Header
