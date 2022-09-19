import SearchInput from '@src/components/searchInput/searchInput'
import Selectbox from '@src/components/selectbox/selectbox'
import OrderFilterTypeEnum from '@src/interfaces/filters'
import { ReactFC } from '@src/interfaces/react'
import ISelectboxItem from '@src/interfaces/selectbox'
import React from 'react'
import './ordersPageActions.sass'

const filtersSelectboxData: ISelectboxItem<OrderFilterTypeEnum>[] = [
  { label: 'Все товары', value: OrderFilterTypeEnum.all },
  { label: 'Выкупленные', value: OrderFilterTypeEnum.buy },
  { label: 'Отмененные', value: OrderFilterTypeEnum.canceled },
  { label: 'Возврат товара', value: OrderFilterTypeEnum.refund },
  { label: 'Отмена магазином', value: OrderFilterTypeEnum.storeCanceled },
]

interface IOrdersPageActionsProps {
  onFiltering: (type: OrderFilterTypeEnum) => void
  onSearch: (value: string) => void
}

const OrdersPageActions: ReactFC<IOrdersPageActionsProps> = ({
  onFiltering,
  onSearch,
}) => {
  const handleFilterType = (
    filterTypeObj: ISelectboxItem<OrderFilterTypeEnum>
  ) => {
    onFiltering(filterTypeObj.value)
  }

  return (
    <div className='orders-actions'>
      <Selectbox<OrderFilterTypeEnum>
        data={filtersSelectboxData}
        onChange={handleFilterType}
      />
      <SearchInput placeholder='Название, бренд, цвет' onChange={onSearch} />
    </div>
  )
}
export default OrdersPageActions
