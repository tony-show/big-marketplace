import { ColorsEnum } from './product'

enum OrderFilterTypeEnum {
  all,
  buy,
  canceled,
  refund,
  storeCanceled,
}
export default OrderFilterTypeEnum

export interface ICheckRadio {
  id: number
  label: string
  value: string | number
}
export type IColor = keyof typeof ColorsEnum
export interface IRange {
  from: number
  to: number
}
export interface IProductsFilters {
  colors: IColor[]
  price: IRange
  sale: number[]
  brends: ICheckRadio[]
}
export interface IProductsSelectedFilters {
  colors: IColor[]
  price: IRange
  sale: number
  brends: ICheckRadio[]
}
