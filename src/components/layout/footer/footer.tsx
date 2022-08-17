import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import React from 'react'
import { Link } from 'react-router-dom'
import './footer.sass'

const Footer: ReactFC = () => {
  return (
    <div className='container'>
      <footer className='footer'>
        <div>
          <h3 className='footer__title'>Покупателям</h3>
          <Link to={routing.services.order}>Как сделать заказ</Link>
          <Link to={routing.services.payVariants}>Способы оплаты</Link>
          <Link to={routing.services.shipping}>Доставка</Link>
          <Link to={routing.services.productBack}>Возврат товара</Link>
          <Link to={routing.services.moneyBack}>Возврат денежных средств</Link>
          <Link to={routing.services.salingRules}>Правила продажи</Link>
          <Link to={routing.services.serviceRules}>
            Правила пользования торговой площадкой
          </Link>
          <Link to={routing.services.faq}>Вопросы и ответы</Link>
        </div>
        <div>
          <h3 className='footer__title'>Партнерам</h3>
          <Link to='/'>Продавайте на TONYSHOW</Link>
          <Link to='/'>Перевозчикам</Link>
          <Link to='/'>Откройте пункт выдачи</Link>
          <Link to='/'>Франшизный пункт выдачи</Link>
          <h3 className='footer__title'>Наши проекты</h3>
          <Link to='https://tonyshow.ru' target='_blank'>
            TONYSHOW School
          </Link>
          <Link to='/'>Трудоустройство</Link>
          <Link to='/'>Цифровые товары</Link>
        </div>
        <div>
          <h3 className='footer__title'>Компания</h3>
          <Link to='/'>О нас</Link>
          <Link to='/'>Реквизиты</Link>
          <Link to='/'>Пресс-центр</Link>
          <Link to='/'>Контакты</Link>
          <Link to='/'>Bug Bounty</Link>
          <Link to='/'>TS.Tech</Link>
        </div>
        <div>
          <h3 className='footer__title'>Компания</h3>
          <Link to='https://t.me/tonyshow_channel' target='_blank'>
            Телеграм
          </Link>
          <Link
            to='https://www.youtube.com/c/html-css-javascript'
            target='_blank'
          >
            YouTube
          </Link>
          <Link to='https://vk.com/html_css_javascript_react' target='_blank'>
            ВКонтакте
          </Link>
          <Link to='https://www.instagram.com/tonyshow_lider' target='_blank'>
            Инстаграм
          </Link>
        </div>
        <div>
          <h3 className='footer__title'>Мобильные устройства</h3>
          <div className='footer__mobile-app'>
            <img
              src='../../../images/mobile_app/google.png'
              alt='Google Play'
            />
            <img src='../../../images/mobile_app/apple.png' alt='App Store' />
          </div>
        </div>
        <div>
          <div>
            2004-2022 © TonyShow — модный интернет-магазин одежды, обуви и
            аксессуаров. Все права защищены. Доставка по всей России.
          </div>
          <Link to='/'>Проверка совместимости</Link>
          <div className='footer__pay'>
            <img src='../../../images/pay/visa.png' alt='Visa' />
            <img src='../../../images/pay/mastercard.png' alt='MaterCard' />
            <img src='../../../images/pay/mir.png' alt='Mir' />
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer
