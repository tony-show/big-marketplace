import IconsEnum from './icons'

export interface IMenuCategory {
  id: number
  name: string
  route?: string
  icon?: IconsEnum
  img?: string
  subCategories?: IMenuCategory[]
}
