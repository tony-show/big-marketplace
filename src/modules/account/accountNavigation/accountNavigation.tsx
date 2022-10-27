import React from 'react'
import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import { Link, useMatch } from 'react-router-dom'
import './accountNavigation.sass'

const AccountNavigation: ReactFC = () => {
  const navData = [
    { icon: 'home', text: 'Главная', route: routing.account.index },
    { icon: 'heart', text: 'Избранное', route: routing.account.favorite },
    { icon: 'bag', text: 'Покупки', route: routing.account.orders },
    { icon: 'support', text: 'Обращения', route: routing.account.support },
    {
      icon: 'review',
      text: 'Отзывы и вопросы',
      route: routing.account.reviews,
    },
    { icon: 'cash', text: 'Баланс', route: routing.account.wallet },
    { icon: 'user_outline', text: 'Профиль', route: routing.account.profile },
  ]

  return (
    <>
      {navData.map(({ route, icon, text }) => (
        <Link
          key={route}
          to={route}
          className={`account__nav-item ${useMatch(route) ? 'active' : ''}`}
        >
          <i className={`ic_${icon}`} />
          <span>{text}</span>
        </Link>
      ))}
    </>
  )
}
export default AccountNavigation
