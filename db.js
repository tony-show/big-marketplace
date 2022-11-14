const generateProducts = require('./src/server/data/products')

module.exports = () => {
  const data = {
    products: [],
    users: [
      {
        id: 1,
        data: {
          name: 'Анатолий',
          lastname: 'Ивашов',
          phone: '+7 000 000 00-00',
        },
        isNotification: false,
        shipping: {
          type: 'courier',
          address: null,
          addreses: [
            'Москва, какой-то там бульвар 1',
            'Санкт-Петербург, ул. Петра 1, д. 3',
          ],
        },
        paymentType: null,
        basket: [],
        favorite: [],
        bayed: [],
      },
    ],
  }
  data.products = generateProducts(100)

  return data
}
