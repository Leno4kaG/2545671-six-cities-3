import { getRandomInteger } from '../utils/utils';

const mockOffers = [
  {
    id: '7dc7a345-b2f7-402b-a652-f223780ff164',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: getRandomInteger(10, 1000),
    isFavorite: !getRandomInteger(0, 1),
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating', ' Wi-Fi', ' Washing machine', ' Towels', ' Coffee machine', ' Baby seat', 'Kitchen', 'Dishwasher', ' Cabel TV', ' Fridge'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    maxAdults: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg'
  },
  {
    id: '7dc7a345-b2f7-402b-a652-f223780ff165',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: getRandomInteger(10, 1000),
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 1.2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: [
      'Heating', ' Wi-Fi', ' Washing machine', ' Towels', ' Coffee machine', ' Baby seat'
    ],
    host: {
      name: 'Sara Parker',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    maxAdults: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg'
  },
  {
    id: '7dc7a345-b2f7-402b-a652-f223780ff166',
    title: 'Tile House',
    type: 'hotel',
    price: getRandomInteger(10, 1000),
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 4.2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      ' Wi-Fi', ' Washing machine', ' Towels', ' Coffee machine', ' Baby seat', 'Kitchen', 'Dishwasher', ' Cabel TV', ' Fridge'
    ],
    host: {
      name: 'Ivan Sov',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    maxAdults: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg'
  },
  {
    id: '7dc7a345-b2f7-402b-a652-f223780ff167',
    title: 'Perfectly located Castro',
    type: 'room',
    price: getRandomInteger(10, 1000),
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 1.7,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: [
      ' Baby seat', 'Kitchen', 'Dishwasher', ' Cabel TV', ' Fridge'
    ],
    host: {
      name: 'Ola Con',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: ['img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    maxAdults: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/8.jpg'
  },
  {
    id: '7dc7a345-b2f7-402b-a652-f223780ff168',
    title: 'The house among olive',
    type: 'apartment',
    price: getRandomInteger(10, 1000),
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 2.1,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 4,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Alex Cross',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: ['img/room.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    maxAdults: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg'
  }
];

export default mockOffers;
