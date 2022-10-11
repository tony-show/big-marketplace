import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { ICheckRadio, IColor, IRange } from '@src/interfaces/filters'
import './filters.sass'
import { setFilters } from '@src/store/productsStore/productsStore'
import FilterColor from '../filterColor/filterColor'
import FilterRange from '../filterRange/filterRange'
import FilterRadio from '../filterRadio/filterRadio'
import FilterCheckbox from '../filterCheckbox/filterCheckbox'

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

  const onClear = (filter: 'colors' | 'sale' | 'brends') => {
    dispatch(
      setFilters({
        ...selectedFilters,
        [filter]: filter === 'sale' ? null : [],
      })
    )
  }

  return (
    <div className='filters'>
      <FilterColor
        label='Цвет'
        data={filters.colors}
        selectedData={selectedFilters.colors}
        onChange={changeColor}
        onClear={() => onClear('colors')}
      />
      <FilterRange label='Цена' data={filters.price} onChange={changePrice} />
      <FilterRadio
        label='Скидка'
        data={sales}
        onChange={changeSale}
        selectedData={selectedFilters.sale}
        onClear={() => onClear('sale')}
      />
      <FilterCheckbox
        label='Бренды'
        data={filters.brends}
        selectedData={selectedFilters.brends}
        onChange={changeBrend}
        onClear={() => onClear('brends')}
      />
    </div>
  )
}
export default Filters
