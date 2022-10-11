import { IColor } from '@src/interfaces/filters'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import './filterColor.sass'

interface IFilterColorProps {
  label: string
  data: IColor[]
  selectedData?: IColor[]
  onChange: (data: IColor) => void
  onClear?: () => void
}

const FilterColor: ReactFC<IFilterColorProps> = ({
  label,
  data,
  onChange,
  selectedData,
  onClear,
}) => {
  const [isClose, setIsClose] = useState(false)

  const renderColors = () => {
    const selectedColors = selectedData as IColor[]
    const colorsHtml = data.map((color) => (
      <div
        key={color}
        className={`filter-color__color ${
          selectedColors.some((c) => c === color) ? 'selected' : ''
        }`}
        style={{
          backgroundColor: color,
        }}
        onClick={() => onChange(color)}
      />
    ))
    return <div className='filter-color__colors'>{colorsHtml}</div>
  }

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onClear()
  }

  return (
    <div className={isClose ? 'filter-color close' : 'filter-color'}>
      <div className='filter-color__head' onClick={() => setIsClose(!isClose)}>
        <span>{label}</span>
        {!!selectedData.length && (
          <span className='filter-color__clear' onClick={handleClear}>
            Сбросить
          </span>
        )}
        <div className='filter-color__close-btn' />
      </div>
      <div className='filter-color__content'>{renderColors()}</div>
    </div>
  )
}
export default FilterColor
