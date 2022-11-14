import { PaymentTypeEnum } from '@src/interfaces/payment'
import IProduct from '@src/interfaces/product'
import { IShipping } from '@src/interfaces/shipping'
import IUser from '@src/interfaces/user'
import apiService from './api'

export interface IUsersService {
  getUser: (id: number) => Promise<IUser>
}

export default class UsersService implements IUsersService {
  private api = apiService

  getUser = async (userId: number): Promise<IUser> => {
    const { data } = await this.api.get(`users/${userId}`)
    return data
  }

  setNotificationStatus = async (
    userId: number,
    isNotification: boolean
  ): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userId}`, { isNotification })
    return data
  }

  updateBayed = async (userId: number, bayed: IProduct[]): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userId}`, { bayed })
    return data
  }

  updateFavorite = async (
    userId: number,
    favorite: IProduct[]
  ): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userId}`, { favorite })
    return data
  }

  updateBasket = async (userId: number, basket: IProduct[]): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userId}`, { basket })
    return data
  }

  changeShippingData = async (
    userId: number,
    shipping: IShipping
  ): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userId}`, { shipping })
    return data
  }

  changePaymentType = async (
    userId: number,
    paymentType: PaymentTypeEnum
  ): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userId}`, { paymentType })
    return data
  }

  completeOrder = async (
    userId: number,
    obj: { basket: IProduct[]; bayed: IProduct[] }
  ): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userId}`, { ...obj })
    return data
  }
}
