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
    route: '/obuv',
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
]
export default categories
