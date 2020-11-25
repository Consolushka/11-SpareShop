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
      prods: [1133, 1134, 1135, 1137, 1136]
    },
    {
      id: 1,
      title: 'Шины и диски',
      href: '#',
      iconWidth: 39,
      iconHeight: 39,
      iconPath: "/assets/img/sprite.svg#icon-tire"
    },
    {
      id: 2,
      title: 'Инструменты',
      href: '#',
      iconWidth: 50,
      iconHeight: 50,
      iconPath: "/assets/img/sprite.svg#icon-tools"
    },
    {
      id: 3,
      title: 'Запчасти на ТО',
      href: '#',
      iconWidth: 28,
      iconHeight: 27,
      iconPath: "/assets/img/sprite.svg#icon-to"
    },
    {
      id: 4,
      title: 'Автоэлектроника',
      href: '#',
      iconWidth: 38,
      iconHeight: 38,
      iconPath: "/assets/img/sprite.svg#icon-electric"
    },
    {
      id: 5,
      title: 'Аксессуары и другое',
      href: '#',
      iconWidth: 18,
      iconHeight: 40,
      iconPath: "/assets/img/sprite.svg#icon-accessories"
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
      id: 1137,
      sale: 300,
      endOfSale: new Date('2020-12-12T00:00:00')
    }
  ],
  products: {
    1133: {
      id: 1133,
      imgPath: '/assets/img/1133.png',
      title: 'Ремень',
      price: '440',
      inStock: 100,
      isSale: false,
      isWinter: false,
      isSummer: false
    },
    1134: {
      id: 1134,
      imgPath: '/assets/img/1134.png',
      title: 'Шина 205/80 R16 104Q Misha RF Power Grum',
      price: '11 680',
      inStock: 100,
      isSale: true,
      isWinter: true,
      isSummer: false,
      mark: 'BMW',
      model: '1-series',
      carcase: 'E81 3d',
      modification: '116 d'
    },
    1135: {
      id: 1135,
      imgPath: '/assets/img/1135.png',
      title: 'Фара Nokian 2025',
      price: '680',
      inStock: 0,
      isSale: false,
      isWinter: false,
      isSummer: false
    },
    1136: {
      id: 1136,
      imgPath: '/assets/img/1136.png',
      title: 'Шина 245/60 R18 105T Contyther Crosh Conta...',
      price: '11 232',
      inStock: 0,
      isSale: true,
      isWinter: false,
      isSummer: true
    },
    1137: {
      id: 1137,
      imgPath: '/assets/img/bulb.png',
      title: 'Лампочка mini...',
      price: '500',
      inStock: 10,
      isSale: false,
      isWinter: false,
      isSummer: true
    },
    1138: {
      id: 1138,
      imgPath: '/assets/img/1133.png',
      title: 'Ремень',
      price: '440',
      inStock: 100,
      isSale: false,
      isWinter: false,
      isSummer: false
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
