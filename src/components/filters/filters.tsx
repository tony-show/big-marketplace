import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { ICheckRadio, IColor, IRange } from '@src/interfaces/filters'
import { setFilters } from '@src/store/productsStore/productsStore'
import Filter from '../filter/filter'
import './filters.sass'

const sales: ICheckRadio[] = [
  { id: 1, label: 'от 10% и выше', value: 10 },
  { id: 2, label: 'от 30% и выше', value: 30 },
  { id: 3, label: 'от 50% и выше', value: 50 },
  { id: 4, label: 'от 70% и выше', value: 70 },
]

const Filters: ReactFC = () => {
  const dispatch = useAppDispatch()
  const { filters, selectedFilters } = useAppSelector((state) => state.products)

  const changeColor = (color: IColor) => {
    const { colors } = selectedFilters
    const isSelected = colors.includes(color)
    const withoutSelectedColor = colors.filter((c) => c !== color)
    dispatch(
      setFilters({
        ...selectedFilters,
        colors: isSelected ? withoutSelectedColor : [...colors, color],
      })
    )
  }

  const changePrice = (price: IRange) => {
    dispatch(
      setFilters({
        ...selectedFilters,
        price,
      })
    )
  }

  const changeSale = (sale: number) => {
    dispatch(
      setFilters({
        ...selectedFilters,
        sale,
      })
    )
  }

  const changeBrend = (brend: ICheckRadio) => {
    const { brends } = selectedFilters
    const isSelected = brends.some((b) => b.value === brend.value)
    const withoutSelectedBrend = brends.filter((b) => b.value !== brend.value)
    dispatch(
      setFilters({
        ...selectedFilters,
        brends: isSelected ? withoutSelectedBrend : [...brends, brend],
      })
    )
  }

  return (
    <div className='filters'>
      <Filter
        label='Цвет'
        type='color'
        data={filters.colors}
        selectedData={selectedFilters.colors}
        onChange={changeColor}
      />
      <Filter
        label='Цена'
        type='range'
        data={filters.price}
        onChange={changePrice}
      />
      <Filter label='Скидка' type='radio' data={sales} onChange={changeSale} />
      <Filter
        label='Бренды'
        type='checkbox'
        data={filters.brends}
        selectedData={selectedFilters.brends}
        onChange={changeBrend}
      />
    </div>
  )
}
export default Filters
