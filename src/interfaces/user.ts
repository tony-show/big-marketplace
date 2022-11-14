import { PaymentTypeEnum } from './payment'
import IProduct from './product'
import ShippingTypeEnum from './shipping'

interface IUser {
  id: number
  data: {
    name: string
    lastname: string
    phone: string
  }
  isNotification: boolean
  shipping: {
    type: ShippingTypeEnum
    address: string
    addreses: string[]
  }
  paymentType: PaymentTypeEnum
  basket: IProduct[]
  favorite: IProduct[]
  bayed: IProduct[]
}
export default IUser
