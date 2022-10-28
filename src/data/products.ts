import functionHelpers from '@src/helpers/functionHelpers'
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

const generateImages = (num: number) => {
  const images = []
  for (let i = 0; i < num; i++) {
    images.push(`https://placeimg.com/400/300/tech?id=${i}`)
  }
  return images
}

const generateProducts = (num: number) => {
  const products: IProduct[] = []

  for (let i = 0; i < num; i++) {
    const names = ['IPhone 13 Pro Max', 'Mackbook Pro', 'Super Vision']
    const colors = ['black', 'blue', 'green', 'yellow', 'red', 'white']
    const ratingTotalNums: (1 | 2 | 3 | 4 | 5)[] = [1, 2, 3, 4, 5]
    const nameId = functionHelpers.getRandomNumber(names.length)
    const brendId = functionHelpers.getRandomNumber(brends.length)
    const colorId = Math.floor(Math.random() * colors.length)
    const date = moment(Date.now() - functionHelpers.getRandomMilliseconds(10))
    const ratingTotalId = functionHelpers.getRandomNumber(
      ratingTotalNums.length
    )
    const imagesCount = functionHelpers.getRandomNumberInRange(1, 10)
    const images = generateImages(imagesCount)
    const productData: IProduct = {
      id: i,
      name: names[nameId],
      brend: brends[brendId],
      cover: `https://placeimg.com/400/300/tech?id=${i}`,
      price: functionHelpers.getRandomNumber(1000000),
      link: '/catalog/elektronika/telefony',
      sale: functionHelpers.getRandomNumber(100),
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
        count: functionHelpers.getRandomNumber(100),
      },
      seller: 'OZON',
      shipTime: Math.ceil(Math.random() * 5),
      bage: 'new',
      credit: 'РАССРОЧКА ОТ 0-0-6!',
      isAvailable: !!Math.round(Math.random()),
      addToFavoriteDate: +date,
      selectedColor: 'white',
      orderDate: +date,
      getDate: +date.add(3, 'day'),
      orderStatus: functionHelpers.getRandomNumber(5),
      soldCount: functionHelpers.getRandomNumber(100),
      updated: +date - functionHelpers.getRandomMilliseconds(10),
      images,
    }
    products.push(productData)
  }
  return products
}
export default generateProducts
