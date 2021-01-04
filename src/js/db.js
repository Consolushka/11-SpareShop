export default {
  sortTypes: ["Поиск по Vin", "Поиск по марке", "Поиск по названию товара", "Поиск по артикулу"],
  types: [
    {
      id: 0,
      title: 'Автохимия',
      href: '#',
      iconWidth: 35,
      iconHeight: 38,
      iconPath: "/assets/img/sprite.svg#icon-chemicals",
      url: '/chemical/',
      prods: [1133, 1134, 1135, 1137, 1136]
    },
    {
      id: 1,
      title: 'Шины и диски',
      href: '#',
      iconWidth: 39,
      iconHeight: 39,
      iconPath: "/assets/img/sprite.svg#icon-tire",
      prods: []
    },
    {
      id: 2,
      title: 'Инструменты',
      href: '#',
      iconWidth: 50,
      iconHeight: 50,
      iconPath: "/assets/img/sprite.svg#icon-tools",
      prods: []
    },
    {
      id: 3,
      title: 'Запчасти на ТО',
      href: '#',
      iconWidth: 28,
      iconHeight: 27,
      iconPath: "/assets/img/sprite.svg#icon-to",
      prods: []
    },
    {
      id: 4,
      title: 'Автоэлектроника',
      href: '#',
      iconWidth: 38,
      iconHeight: 38,
      iconPath: "/assets/img/sprite.svg#icon-electric",
      prods: []
    },
    {
      id: 5,
      title: 'Аксессуары и другое',
      href: '#',
      iconWidth: 18,
      iconHeight: 40,
      iconPath: "/assets/img/sprite.svg#icon-accessories",
      prods: []
    }
  ],
  categories: [
    {
      title: 'Поиск по Vim',
    },
    {
      title: 'Поиск по марке',
    },
    {
      title: 'Поиск по названию товара',
    },
    {
      title: 'Поиск по артикулу',
    }
  ],
  popular: {
    0: [1133, 1134, 1135, 1136, 1137, 1138],
    1: []
  },
  shares: [
    {
      id: 1137,
      sale: 300,
      endOfSale: new Date('2020-11-12T00:00:00')
    },
    {
      id: 1134,
      sale: 1000,
      endOfSale: new Date('2020-12-12T00:00:00')
    }
  ],
  products: {
    1133: {
      id: 1133,
      imgPath: '/assets/img/1133.png',
      title: 'Ремень',
      price: 440,
      inStock: 100,
      isSale: false,
      isWinter: false,
      isSummer: false,
      sold: 1200,
      similar: [1134, 1135, 1136],
      char: [
        {
          name: "Производитель",
          value: "Кама"
        },
        {
          name: "Тип",
          value: "Поясной"
        }],
      rating: 2
    },
    1134: {
      id: 1134,
      imgPath: '/assets/img/1134.png',
      title: 'Шина 205/80 R16 104Q Misha RF Power Grum',
      price: 11680,
      inStock: 100,
      isSale: true,
      isWinter: true,
      isSummer: false,
      sold: 1310,
      char: [
        {
          name: "Производитель",
          value: "BMW"
        },
        {
          name: "Модель",
          value: "1-series"
        },
        {
          name: "Корпус",
          value: "E81 3d"
        },
        {
          name: "Модификация",
          value: "116 D"
        }
      ],
      rating: 4
    },
    1135: {
      id: 1135,
      imgPath: '/assets/img/1135.png',
      title: 'Фара Nokian 2025',
      price: 680,
      inStock: 0,
      isSale: false,
      isWinter: false,
      isSummer: false,
      sold: 1400
    },
    1136: {
      id: 1136,
      imgPath: '/assets/img/1136.png',
      title: 'Шина 245/60 R18 105T Contyther Crosh Conta...',
      price: 11232,
      inStock: 0,
      isSale: true,
      isWinter: false,
      isSummer: true,
      sold: 1500
    },
    1137: {
      id: 1137,
      imgPath: '/assets/img/bulb.png',
      title: 'Лампочка mini...',
      price: 500,
      inStock: 10,
      isSale: false,
      isWinter: false,
      isSummer: true,
      sold: 1410
    },
    1138: {
      id: 1138,
      imgPath: '/assets/img/1133.png',
      title: 'Ремень',
      price: 440,
      inStock: 100,
      isSale: false,
      isWinter: false,
      isSummer: false,
      sold: 10
    },
  },
  user: {
    id: 0,
    fName: 'John',
    sName: 'Doe',
    birth: new Date('2000-11-11T00:00:00'),
    favorites: [],
    cart: {}
  }
}
