import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import './account.sass'
import AccountCard from './accountCard/accountCard'

const product: IProduct = {
  id: 1,
  name: 'MackBook Pro',
  brend: 'Apple',
  cover: `https://placeimg.com/400/300/tech?id=1`,
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
  warehouse: 'Коледино WB',
}

const getProducts = (count: number): IProduct[] => {
  const products: IProduct[] = []
  for (let i = 0; i < count; i++) {
    products.push({
      ...product,
      id: i,
      cover: `https://placeimg.com/100/100/tech?id=${i}`,
    })
  }
  return products
}
const buyProductsData = getProducts(5)
const favoriteProductsData = getProducts(36)

const Account: ReactFC = () => {
  const renderNavigation = () => {
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

    return navData.map(({ route, icon, text }) => (
      <Link
        key={route}
        to={route}
        className={`account__nav-item ${useMatch(route) ? 'active' : ''}`}
      >
        <i className={`ic_${icon}`} />
        <span>{text}</span>
      </Link>
    ))
  }

  return (
    <div className='account'>
      <div className='account__row1'>{renderNavigation()}</div>
      <div className='account__row2'>
        <AccountCard
          link={routing.account.profile}
          title='Ивашов Анатолий'
          subTitle='Подтвердить аккаунт'
          label='Телефон'
          text='+7 (000) 000 00-00'
          onNotification={() => alert('Уведомления включены')}
          logout
          isBig
        />
        <AccountCard
          link={routing.account.shipping}
          title='Доставки'
          label='Ближайшая'
          text='не ожидается'
          gradient
          icon={<i className='ic_shipping' />}
          isBig
        />
        <AccountCard
          link={routing.account.sale}
          title='Скидка покупателя'
          label='Процент и сумма выкупа за 2 года'
          sale={{
            size: 25,
            buySale: 100,
            buySum: 10000,
          }}
          isBig
        />
      </div>
      <div className='account__row3'>
        <AccountCard
          link={routing.account.cards}
          title='Мои карты'
          label='Добавить карту'
        />
        <AccountCard link={routing.account.wallet} title='Баланс' label='0 ₽' />
        <AccountCard
          link={routing.account.cheki}
          title='Чеки'
          label='Смотреть'
        />
        <AccountCard
          link={routing.account.brends}
          title='Любимые бренды'
          label='1 бренд'
        />
      </div>
      <div className='account__row4'>
        <AccountCard
          link={routing.account.orders}
          title='Покупки'
          label='Всего товаров'
          text={String(buyProductsData.length)}
          products={buyProductsData}
        />
        <AccountCard
          link={routing.account.favorite}
          title='Избранное'
          label='Доступно к заказу'
          text={String(
            favoriteProductsData.length > 3
              ? favoriteProductsData.length - 3
              : favoriteProductsData.length
          )}
          products={favoriteProductsData}
        />
      </div>
    </div>
  )
}
export default Account
