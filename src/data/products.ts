import IProduct from '@src/interfaces/product'
import moment from 'moment'

const generateProducts = (num: number) => {
  const products: IProduct[] = []

  for (let i = 0; i < num; i++) {
    const names = ['IPhone 13 Pro Max', 'Mackbook Pro', 'Super Vision']
    const brends = ['Apple', 'Samsung', 'LG']
    const colors = ['black', 'blue', 'green', 'yellow', 'red', 'white']
    const nameId = Math.floor(Math.random() * names.length)
    const brendId = Math.floor(Math.random() * brends.length)
    const colorId = Math.floor(Math.random() * colors.length)
    const date = moment(Date.now() - Math.floor(Math.random() * 1000000000))
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
        total: 3,
        count: 19,
      },
      seller: 'OZON',
      shipTime: 3,
      bage: 'new',
      credit: 'РАССРОЧКА ОТ 0-0-6!',
      isAvailable: !!Math.round(Math.random()),
      addToFavoriteDate: date,
      selectedColor: 'white',
      selectedCount: 1,
      checked: true,
      orderDate: date,
      getDate: date.add(3, 'day'),
      orderStatus: Math.floor(Math.random() * 5),
    }
    products.push(productData)
  }
  return products
}
export default generateProducts
