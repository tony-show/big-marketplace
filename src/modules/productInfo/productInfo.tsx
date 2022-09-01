import IProduct, { IInformationList } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import InformationList from './informationList/informationList'
import ProductSlider from './productSlider/productSlider'
import './productInfo.sass'
import ProductActions from './productActions/productActions'
import FixedPanel from './fixedPanel/fixedPanel'
import functionHelpers from '@src/helpers/functionHelpers'

const dataProductIformation: IInformationList[] = [
  {
    title: 'Общие характеристики',
    list: [
      { label: 'Гарантийный срок', value: '1 год' },
      { label: 'Модель', value: 'MacBook Pro 2020 (MYD92RU/A)' },
      { label: 'Операционная система', value: 'macOS' },
    ],
  },
  {
    title: 'Экран',
    list: [
      { label: 'Диагональ экрана', value: '13.3"' },
      { label: 'Разрешение экрана', value: '2560x1600' },
    ],
  },
  {
    title: 'Процессор',
    list: [
      { label: 'Количество ядер процессора', value: '8' },
      { label: 'Линейка процессоров', value: 'Apple M1' },
      { label: 'Процессор', value: 'Apple M1' },
    ],
  },
  {
    title: 'Память',
    list: [{ label: 'Объем оперативной памяти (Гб)', value: '8 ГБ' }],
  },
  {
    title: 'Видеокарта',
    list: [{ label: 'Видеоадаптер', value: 'Apple M1 8-core' }],
  },
  {
    title: 'Накопители данных',
    list: [
      { label: 'Объем накопителя HDD', value: 'нет' },
      { label: 'Объем накопителя SSD', value: '512 Гб' },
      { label: 'Тип накопителя', value: 'SSD' },
    ],
  },
]

interface IProductInfoProps {
  product: IProduct
}

const ProductInfo: ReactFC<IProductInfoProps> = ({ product }) => {
  const [isOpenCharacteristics, setIsOpenCharacteristics] = useState(false)
  const [isOpenDescription, setIsOpenDescription] = useState(false)

  return (
    <div className='product'>
      <div className='product__block'>
        <ProductSlider />
        <div>
          <InformationList
            data={[dataProductIformation[0], dataProductIformation[1]]}
          />
          <div
            className='product__link'
            onClick={() => functionHelpers.scrollToElement('characteristics')}
          >
            Все характеристики
          </div>
        </div>
        <div>
          <ProductActions />
        </div>
      </div>
      <h2 id='characteristics' className='product__block-title'>
        О товаре
      </h2>
      <div className='product__block'>
        <div>
          <div
            className={`product__all-characteristics ${
              isOpenCharacteristics ? 'open' : ''
            }`}
          >
            <InformationList data={dataProductIformation} />
          </div>
          <div
            className='product__link'
            onClick={() => setIsOpenCharacteristics(!isOpenCharacteristics)}
          >
            {isOpenCharacteristics
              ? 'Свернуть характеристики'
              : 'Развернуть характеристики'}
          </div>
        </div>
        <div>
          <div className='product__description-title'>Описание</div>
          <div
            className={`product__description ${
              isOpenDescription ? 'open' : ''
            }`}
          >
            С появлением чипа M1 MacBook Pro 13 дюймов становится невероятно
            производительным и быстрым. Мощность центрального процессора выросла
            до 2,8 раза. Скорость обработки графики - до 5 раз. Благодаря нашей
            передовой системе Neural Engine скорость машинного обучения возросла
            до 11 раз. При этом MacBook Pro работает без подзарядки дольше, чем
            любой другой Mac. Наш самый популярный ноутбук класса Pro выходит на
            совершенно новый уровень.
          </div>
          <div
            className='product__link'
            onClick={() => setIsOpenDescription(!isOpenDescription)}
          >
            {isOpenDescription ? 'Свернуть описание' : 'Развернуть описание'}
          </div>
        </div>
        <div>
          Corrupti, deserunt asperiores! Aspernatur harum neque deserunt
          corporis fugit nesciunt vel aperiam, nulla magnam, maxime blanditiis
          sit voluptatibus id et suscipit ab soluta, veniam accusantium quo
          beatae repudiandae magni non.
        </div>
      </div>
      <FixedPanel product={product} />
    </div>
  )
}
export default ProductInfo
