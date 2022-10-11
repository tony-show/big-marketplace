import { ICheckRadio } from '@src/interfaces/filters'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './filterRadio.sass'

interface IFilterRadioProps {
  label: string
  data: ICheckRadio[]
  selectedData?: number
  onChange: (data: number) => void
  onClear?: () => void
}

const FilterRadio: ReactFC<IFilterRadioProps> = ({
  label,
  data,
  onChange,
  selectedData,
  onClear,
}) => {
  const [isClose, setIsClose] = useState(false)

  const renderRadio = () => {
    const groupName = String(Math.random() * 1000000)
    const list = data.map(({ id, label: name, value }) => (
      <Form.Check
        key={id}
        type='radio'
        name={groupName}
        id={`${groupName}-${id}`}
        label={name}
        value={value}
        checked={value === selectedData}
        onChange={() => onChange(+value)}
      />
    ))

    return (
      <div className='filter-radio__list'>
        <div className='filter-radio__list-content'>{list}</div>
      </div>
    )
  }

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onClear()
  }

  return (
    <div className={isClose ? 'filter-radio close' : 'filter-radio'}>
      <div className='filter-radio__head' onClick={() => setIsClose(!isClose)}>
        <span>{label}</span>
        {!!selectedData && (
          <span className='filter-radio__clear' onClick={handleClear}>
            Сбросить
          </span>
        )}
        <div className='filter-radio__close-btn' />
      </div>
      <div className='filter-radio__content'>{renderRadio()}</div>
    </div>
  )
}
export default FilterRadio
