import OrderFilterTypeEnum, { ICheckRadio } from './filters'
import IRating from './rating'

export enum ColorsEnum {
  white = 'Белый',
  black = 'Черный',
  red = 'Красный',
  yellow = 'Желтый',
  green = 'Зеленый',
  blue = 'Синий',
}

interface IProduct {
  id: number
  name: string
  cover: string
  price: number
  brend: ICheckRadio
  link: string
  sale?: number
  rating: IRating
  bage?: string
  credit?: string
  seller: string
  shipTime: number
  color: keyof typeof ColorsEnum
  ram:
    | '2 Гб'
    | '4 Гб'
    | '6 Гб'
    | '8 Гб'
    | '12 Гб'
    | '16 Гб'
    | '64 Гб'
    | '128 Гб'
    | '256 Гб'
  ssd:
    | '1 Тб'
    | '2 Тб'
    | '64 Гб'
    | '120 Гб'
    | '128 Гб'
    | '250 Гб'
    | '256 Гб'
    | '480 Гб'
    | '500 Гб'
    | '512 Гб'
    | '1000 Гб'
  category?: string
  subCategory?: string
  innerSubCategory?: string
  warehouse?: string
  selectedColor?: keyof typeof ColorsEnum
  selectedCount?: number
  inOrder?: boolean
  isAvailable: boolean
  addToFavoriteDate: number
  orderDate?: number
  getDate?: number
  orderStatus?: OrderFilterTypeEnum
  soldCount: number
  updated: number
  isRefund?: boolean
  images: string[]
}
export default IProduct

export interface IInformationList {
  title: string
  list: {
    label: string
    value: string
  }[]
}
