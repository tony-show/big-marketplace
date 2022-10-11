import { ICheckRadio } from '@src/interfaces/filters'
import IProduct from '@src/interfaces/product'
import moment from 'moment'

const brends: ICheckRadio[] = [
  { id: 1, label: 'Lenovo', value: 'lenovo' },
  { id: 2, label: 'Acer', value: 'acer' },
  { id: 3, label: 'HP', value: 'hp' },
  { id: 4, label: 'Asus', value: 'asus' },
  { id: 5, label: 'MSI', value: 'msi' },
  { id: 6, label: 'Apple', value: 'apple' },
  { id: 7, label: 'Honor', value: 'honor' },
  { id: 8, label: 'Dell', value: 'dell' },
  { id: 9, label: 'Dota', value: 'dota' },
  { id: 10, label: 'Huawei', value: 'huawei' },
  { id: 11, label: 'Irbis', value: 'irbis' },
  { id: 12, label: 'Logitech', value: 'logitech' },
  { id: 13, label: 'Redmi', value: 'redmi' },
  { id: 14, label: 'Samsung', value: 'samsung' },
]

const generateProducts = (num: number) => {
  const products: IProduct[] = []

  for (let i = 0; i < num; i++) {
    const names = ['IPhone 13 Pro Max', 'Mackbook Pro', 'Super Vision']
    const colors = ['black', 'blue', 'green', 'yellow', 'red', 'white']
    const ratingTotalNums: (1 | 2 | 3 | 4 | 5)[] = [1, 2, 3, 4, 5]
    const nameId = Math.floor(Math.random() * names.length)
    const brendId = Math.floor(Math.random() * brends.length)
    const colorId = Math.floor(Math.random() * colors.length)
    const date = moment(Date.now() - Math.floor(Math.random() * 1000000000))
    const ratingTotalId = Math.floor(Math.random() * ratingTotalNums.length)
    const productData: IProduct = {
      id: i,
      name: names[nameId],
      brend: brends[brendId],
      cover: `https://placeimg.com/400/300/tech?id=${i}`,
      price: Math.floor(Math.random() * 1000000),
      link: '/catalog/elektronika/telefony',
      sale: Math.floor(Math.random() * 100),
      color: colors[colorId] as
        | 'black'
        | 'blue'
        | 'green'
        | 'yellow'
        | 'red'
        | 'white',
      ram: '2 Гб',
      ssd: '1 Тб',
      rating: {
        total: ratingTotalNums[ratingTotalId],
        count: Math.floor(Math.random() * 100),
      },
      seller: 'OZON',
      shipTime: 3,
      bage: 'new',
      credit: 'РАССРОЧКА ОТ 0-0-6!',
      isAvailable: !!Math.round(Math.random()),
      addToFavoriteDate: +date,
      selectedColor: 'white',
      selectedCount: 1,
      checked: true,
      orderDate: +date,
      getDate: +date.add(3, 'day'),
      orderStatus: Math.floor(Math.random() * 5),
      soldCount: Math.floor(Math.random() * 100),
      updated: +date - Math.floor(Math.random() * 10000000000),
    }
    products.push(productData)
  }
  return products
}
export default generateProducts
