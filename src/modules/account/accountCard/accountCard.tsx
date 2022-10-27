import functionHelpers from '@src/helpers/functionHelpers'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './accountCard.sass'

interface IAccountCardProps {
  title: string
  subTitle?: string
  label: string
  text?: string
  products?: IProduct[]
  sale?: {
    size: number
    buySale: number
    buySum: number
  }
  onNotification?: () => void
  isNotification?: boolean
  logout?: boolean
  gradient?: boolean
  icon?: JSX.Element
  isBig?: boolean
  link: string
}

const AccountCard: ReactFC<IAccountCardProps> = ({
  title,
  subTitle,
  label,
  text,
  products,
  sale,
  onNotification,
  isNotification,
  logout,
  gradient,
  icon,
  isBig,
  link,
}) => {
  const navigate = useNavigate()
  let cls = 'account-card'
  let imgContent: string | JSX.Element = title.charAt(0)

  if (sale) {
    imgContent = `${sale.size}%`
  } else if (icon) {
    imgContent = icon
  }
  if (gradient) {
    cls += ' gradient'
  }

  const handleNotification = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onNotification()
  }

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(routing.home)
  }

  const renderProducts = () => {
    const elements = []
    for (let i = 0; i < products.length && i < 8; i++) {
      elements.push(
        <div key={i} className='account-card__product'>
          {i < 7 && <img src={products[i].cover} alt={products[i].name} />}
          {i === 7 && <strong>+{products.length}</strong>}
        </div>
      )
    }
    return elements
  }

  return (
    <Link to={link} className={cls}>
      <div className='account-card__top'>
        {isBig && (
          <div className={`account-card__img ${sale?.size ? 'small' : ''}`}>
            {imgContent}
          </div>
        )}
        <div className='account-card__title'>
          <h3>{title}</h3>
          {subTitle && <strong>{subTitle}</strong>}
        </div>
        {onNotification && (
          <div
            className={`account-card__notification ${
              isNotification ? 'active' : ''
            }`}
            onClick={handleNotification}
          >
            <i
              className={`ic_${
                isNotification ? 'notification-fill' : 'notification'
              }`}
            />
          </div>
        )}
      </div>
      <div className={`account-card__content ${products ? 'bottom' : ''}`}>
        {products && (
          <div className='account-card__products'>{renderProducts()}</div>
        )}
        <div className='account-card__text'>
          <span>{label}</span>
          {text && <strong>{text}</strong>}
        </div>
        {logout && (
          <span onClick={handleLogout} className='account-card__link'>
            Выйти
          </span>
        )}
      </div>
      {sale && (
        <div className='account-card__sale'>
          <strong>{sale.buySale}%</strong>
          <strong>{functionHelpers.getDigitNumber(sale.buySum)} ₽</strong>
        </div>
      )}
    </Link>
  )
}
export default AccountCard
