import IconsEnum from '@src/interfaces/icons'
import { IMenuCategory } from '@src/interfaces/menuCategories'

const categories: IMenuCategory[] = [
  {
    id: 0,
    route: '/catalog/zhenshinam',
    name: 'Женщинам',
    icon: IconsEnum.menu_woman,
    img: 'https://userpic.fishki.net/2016/03/08/484642/49606932f175e9bb9a7f9084de1c69b8.jpg',
    subCategories: [
      {
        id: 0,
        name: 'Верхняя одежда',
        route: '/catalog/zhenshinam/verhnaya-odejda',
      },
      {
        id: 1,
        name: 'Джинсы',
        route: '/catalog/zhenshinam/dzhinsy',
      },
      {
        id: 2,
        name: 'Платья',
        route: '/catalog/zhenshinam/platya',
        subCategories: [
          {
            id: 0,
            name: 'Летние',
            route: '/catalog/zhenshinam/platya/letnie',
          },
          {
            id: 1,
            name: 'Вечерние',
            route: '/catalog/zhenshinam/platya/vechernie',
          },
          {
            id: 2,
            name: 'Клубные',
            route: '/catalog/zhenshinam/platya/klubnie',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    route: '/catalog/obuv',
    name: 'Обувь',
    icon: IconsEnum.menu_shoes,
    img: 'https://i.pinimg.com/736x/5f/fa/65/5ffa65ad65120e96bfca29be01ed4af4.jpg',
    subCategories: [
      {
        id: 0,
        name: 'Детская',
        route: '/catalog/obuv/detskaya',
      },
      {
        id: 1,
        name: 'Женская',
        route: '/catalog/obuv/zhenskaya',
      },
      {
        id: 2,
        name: 'Мужская',
        route: '/catalog/obuv/muzhskaya',
      },
    ],
  },
  {
    id: 2,
    route: '/catalog/detyam',
    name: 'Детям',
    icon: IconsEnum.menu_children,
    img: 'https://www.dniprowazirka.com.ua/gal/3_YYYY_YYYYYYYYYY.jpg',
    subCategories: [
      {
        id: 0,
        route: '/catalog/detyam/dlya-malchikov',
        name: 'Для мальчиков',
        subCategories: [
          {
            id: 0,
            route: '/catalog/detyam/dlya-malchikov/odezhda',
            name: 'Одежда',
          },
          {
            id: 1,
            route: '/catalog/detyam/dlya-malchikov/obuv',
            name: 'Обувь',
          },
          {
            id: 2,
            route: '/catalog/detyam/dlya-malchikov/igrushki',
            name: 'Игрушки',
          },
        ],
      },
      {
        id: 1,
        route: '/catalog/detyam/dlya-devochek',
        name: 'Для девочек',
        subCategories: [
          {
            id: 0,
            route: '/catalog/detyam/dlya-devochek/odezhda',
            name: 'Одежда',
          },
          {
            id: 1,
            route: '/catalog/detyam/dlya-devochek/obuv',
            name: 'Обувь',
          },
          {
            id: 2,
            route: '/catalog/detyam/dlya-devochek/igrushki',
            name: 'Игрушки',
          },
        ],
      },
      {
        id: 2,
        route: '/catalog/detyam/dlya-novorozhdennyh',
        name: 'Для новорожденных',
      },
    ],
  },
  {
    id: 3,
    route: '/catalog/muzhchinam',
    name: 'Мужчинам',
    icon: IconsEnum.menu_man,
    img: 'https://images11.esquire.ru/upload/custom/75f/75f08b62588a022552cb710beb73ccf4.jpg',
    subCategories: [
      {
        id: 0,
        route: '/catalog/muzhchinam/rubashki',
        name: 'Рубашки',
      },
      {
        id: 1,
        route: '/catalog/muzhchinam/dzhinsy',
        name: 'Джинсы',
      },
      {
        id: 2,
        route: '/catalog/muzhchinam/futbolki',
        name: 'Футболки',
      },
      {
        id: 3,
        route: '/catalog/muzhchinam/shtany',
        name: 'Штаны',
      },
    ],
  },
  {
    id: 4,
    route: '/catalog/dom',
    name: 'Дом',
    icon: IconsEnum.menu_home,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 5,
    route: '/catalog/kosmetika',
    name: 'Красота',
    icon: IconsEnum.menu_cosmetics,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 6,
    route: '/catalog/aksessuary',
    name: 'Аксессуары',
    icon: IconsEnum.menu_accessories,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 7,
    route: '/catalog/elektronika',
    name: 'Электроника',
    icon: IconsEnum.menu_electronic,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
    subCategories: [
      {
        id: 0,
        route: '/catalog/elektronika/smartfony',
        name: 'Смартфоны',
      },
      {
        id: 1,
        route: '/catalog/elektronika/gdzhety',
        name: 'Гаджеты',
      },
      {
        id: 2,
        route: '/catalog/elektronika/noutbuki',
        name: 'Ноутбуки',
      },
      {
        id: 3,
        route: '/catalog/elektronika/televizory',
        name: 'Телевизоры',
      },
    ],
  },
  {
    id: 8,
    route: '/catalog/igrushki',
    name: 'Игрушки',
    icon: IconsEnum.menu_toys,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 9,
    route: '/catalog/tovary-dlya-vzroslyh',
    name: 'Товары для взрослых',
    icon: IconsEnum.menu_adult,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 10,
    route: '/catalog/produkty',
    name: 'Продукты',
    icon: IconsEnum.menu_product,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 11,
    route: '/catalog/bytovaya-tehnika',
    name: 'Бытовая техника',
    icon: IconsEnum.menu_technic,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 12,
    route: '/catalog/zoo-tovary',
    name: 'Зоо товары',
    icon: IconsEnum.menu_zoo,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 13,
    route: '/catalog/sport',
    name: 'Спорт',
    icon: IconsEnum.menu_sport,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 14,
    route: '/catalog/avtotovary',
    name: 'Автотовары',
    icon: IconsEnum.menu_auto,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 15,
    route: '/catalog/knigi',
    name: 'Книги',
    icon: IconsEnum.menu_books,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 16,
    route: '/catalog/premium',
    name: 'Премиум',
    icon: IconsEnum.menu_premium,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 17,
    route: '/catalog/yuvelirnye-izdeliya',
    name: 'Ювелирные изделия',
    icon: IconsEnum.menu_diamond,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 18,
    route: '/catalog/dlya-remonta',
    name: 'Для ремонта',
    icon: IconsEnum.menu_drill,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 19,
    route: '/catalog/mebel',
    name: 'Мебель',
    icon: IconsEnum.menu_furniture,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 20,
    route: '/catalog/sad-i-dacha',
    name: 'Сад и дача',
    icon: IconsEnum.menu_garden,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 21,
    route: '/catalog/zdorove',
    name: 'Здоровье',
    icon: IconsEnum.menu_health,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 22,
    route: '/catalog/kontstovary',
    name: 'Канцтовары',
    icon: IconsEnum.menu_office,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 23,
    route: '/catalog/cifrovye-tovary',
    name: 'Цифровые товары',
    icon: IconsEnum.menu_digital,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 24,
    route: '/catalog/akcyi',
    name: 'Акции',
    icon: IconsEnum.menu_discount,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 25,
    route: '/catalog/aviabilety',
    name: 'Авиабилеты',
    icon: IconsEnum.menu_avia_tickets,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 26,
    route: '/catalog/brendy',
    name: 'Бренды',
    icon: IconsEnum.menu_brand,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 27,
    route: '/catalog/videoobzory',
    name: 'Видеообзоры',
    icon: IconsEnum.menu_review,
    img: `https://placeimg.com/300/400/tech?id=${Math.floor(
      Math.random() * 100
    )}`,
  },
]
export default categories
