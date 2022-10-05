import { useAppSelector } from '@src/hooks/redux'
import { ICheckRadio, IColor, IRange } from '@src/interfaces/filters'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import './filter.sass'

interface IFilterProps {
  type: 'radio' | 'checkbox' | 'range' | 'color'
  label: string
  data: ICheckRadio[] | IRange | IColor[]
  selectedData?: IColor[] | ICheckRadio[]
  onChange?: (data: ICheckRadio | IRange | IColor | number) => void
}

const Filter: ReactFC<IFilterProps> = ({
  type,
  label,
  data,
  onChange,
  selectedData,
}) => {
  const { partFilteredProducts } = useAppSelector((state) => state.products)
  const [isClose, setIsClose] = useState(false)
  const [isHideSearch, setIsHideSearch] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [range, setRange] = useState<IRange>(data as IRange)

  const renderColors = (_data: IColor[]) => {
    const selectedColors = selectedData
    const colorsHtml = _data.map((color) => (
      <div
        key={color}
        className={`filter__color ${
          selectedColors.some((c) => c === color) ? 'selected' : ''
        }`}
        style={{
          backgroundColor: color,
        }}
        onClick={() => onChange(color)}
      />
    ))
    return <div className='filter__colors'>{colorsHtml}</div>
  }

  const renderRange = () => {
    return (
      <div className='filter__range'>
        <InputGroup className='mb-3'>
          {['from', 'to'].map((name) => (
            <Form.Control
              key={name}
              value={range[name]}
              onChange={(e) => {
                setRange({
                  ...range,
                  [name]: /^\d{0,7}$/.test(e.target.value)
                    ? +e.target.value
                    : range[name],
                })
              }}
              onKeyUp={({ key }) => (key === 'Enter' ? onChange(range) : false)}
              onBlur={() => onChange(range)}
            />
          ))}
        </InputGroup>
      </div>
    )
  }

  const renderRadio = (_data: ICheckRadio[]) => {
    const groupName = String(Math.random() * 1000000)
    const list = _data.map(({ id, label: name, value }) => (
      <Form.Check
        key={id}
        type='radio'
        name={groupName}
        id={`${groupName}-${id}`}
        label={name}
        value={value}
        onChange={() => onChange(+value)}
      />
    ))

    return (
      <div className='filter__list'>
        <div className='filter__list-content'>{list}</div>
      </div>
    )
  }

  const renderCheckbox = (_data: ICheckRadio[], isRadio = false) => {
    const selectedCheckboxes = selectedData as ICheckRadio[]
    const groupName = String(Math.random() * 1000000)
    const reg = new RegExp(searchValue, 'i')
    const isBigData = _data.length > 7
    const list = []
    const filteredData = _data.filter((item) => reg.test(item.label))

    for (let i = 0; i < filteredData.length; i++) {
      if (isHideSearch && i > 6) break
      const { id, label: name, value } = filteredData[i]
      const avalibleCount = partFilteredProducts.reduce((count, product) => {
        return product.brend.value === value ? count + 1 : count
      }, 0)
      if (avalibleCount) {
        list.push(
          <Form.Check
            key={id}
            type={isRadio ? 'radio' : 'checkbox'}
            checked={selectedCheckboxes.some((item) => item.value === value)}
            onChange={() => onChange(filteredData[i])}
            name={groupName}
            id={`${groupName}-${id}`}
            label={`${name} (${avalibleCount})`}
            value={value}
          />
        )
      }
    }

    return (
      <div className='filter__list'>
        {isBigData && !isHideSearch && (
          <Form.Control
            placeholder='Я ищу'
            className='filter__search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
        <div className='filter__list-content'>{list}</div>
        {isBigData && isHideSearch && (
          <div
            className='filter__more'
            onClick={() => setIsHideSearch(!isHideSearch)}
          >
            Показать все
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={isClose ? 'filter close' : 'filter'}>
      <div className='filter__head' onClick={() => setIsClose(!isClose)}>
        <span>{label}</span>
        <div className='filter__close-btn' />
      </div>
      <div className='filter__content'>
        {type === 'color' && renderColors(data as IColor[])}
        {type === 'range' && renderRange()}
        {type === 'radio' && renderRadio(data as ICheckRadio[])}
        {type === 'checkbox' && renderCheckbox(data as ICheckRadio[])}
      </div>
    </div>
  )
}
export default Filter
