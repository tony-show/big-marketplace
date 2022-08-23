import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import Filter, { ICheckRadio } from '../filter/filter'
import './filters.sass'

const sales: ICheckRadio[] = [
  { id: 1, label: 'от 10% и выше', value: 10 },
  { id: 2, label: 'от 30% и выше', value: 30 },
  { id: 3, label: 'от 50% и выше', value: 50 },
  { id: 4, label: 'от 70% и выше', value: 70 },
]
const brends: ICheckRadio[] = [
  { id: 1, label: 'Lenovo', value: 'lenovo' },
  { id: 2, label: 'Acer', value: 'acer' },
  { id: 3, label: 'HP', value: 'hp' },
  { id: 4, label: 'Asus', value: 'asus' },
  { id: 5, label: 'MSI', value: 'msi' },
  { id: 6, label: 'Apple', value: 'apple' },
  { id: 7, label: 'Honor', value: 'honor' },
  { id: 8, label: 'Dell', value: 'dell' },
  { id: 9, label: 'Dota', value: 'dota' },
  { id: 10, label: 'Huawei', value: 'huawei' },
  { id: 11, label: 'Irbis', value: 'irbis' },
  { id: 12, label: 'Logitech', value: 'logitech' },
  { id: 13, label: 'Redmi', value: 'redmi' },
  { id: 14, label: 'Samsung', value: 'samsung' },
]

const Filters: ReactFC = () => {
  return (
    <div className='filters'>
      <Filter
        label='Цвет'
        type='color'
        data={['black', 'blue', 'yellow', 'red', 'green']}
      />
      <Filter label='Цена' type='range' data={{ from: 100, to: 20000 }} />
      <Filter label='Скидка' type='radio' data={sales} />
      <Filter label='Бренды' type='checkbox' data={brends} />
    </div>
  )
}
export default Filters
