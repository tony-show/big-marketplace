import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './menu.sass'

const Menu: ReactFC = () => {
  return (
    <nav className='menu'>
      <div className='menu__sub'>
        <Link to='/'>Кросовки</Link>
        <Link to='/'>Джинсы</Link>
        <Link to='/'>Рубашки</Link>
      </div>
    </nav>
  )
}
export default Menu
