import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import { changeNotificationStatus } from '@src/store/userStore/userStore'
import React from 'react'
import './account.sass'
import AccountCard from './accountCard/accountCard'
import AccountNavigation from './accountNavigation/accountNavigation'

const Account: ReactFC = () => {
  const dispatch = useAppDispatch()
  const {
    data: { name, lastname, phone },
    isNotification,
    bayed,
    favorite,
  } = useAppSelector((state) => state.user)

  return (
    <div className='account'>
      <div className='account__row1'>
        <AccountNavigation />
      </div>
      <div className='account__row2'>
        <AccountCard
          link={routing.account.profile}
          title={`${name} ${lastname}`}
          subTitle='Подтвердить аккаунт'
          label='Телефон'
          text={phone}
          onNotification={() => dispatch(changeNotificationStatus())}
          isNotification={isNotification}
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
          text={String(bayed.length)}
          products={bayed}
        />
        <AccountCard
          link={routing.account.favorite}
          title='Избранное'
          label='Доступно к заказу'
          text={String(
            favorite.filter((product) => product.isAvailable).length
          )}
          products={favorite}
        />
      </div>
    </div>
  )
}
export default Account
