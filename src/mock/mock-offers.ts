import { getRandomInteger } from '../utils/utils';
import { Offer } from '../types';

const mockOffers: Offer[] = [
  {
    id: '7dc7a345-b2f7-402b-a652-f223780ff165',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: getRandomInteger(10, 1000),
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
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
    city: {
      name: 'Cologne',
      location: {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
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
    city: {
      name: 'Brussels',
      location: {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
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
    id: '7dc7a345-b2f7-402b-a652-f223780ff164',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: getRandomInteger(10, 1000),
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
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
    id: '7dc7a345-b2f7-402b-a652-f223780ff168',
    title: 'The house among olive',
    type: 'apartment',
    price: getRandomInteger(10, 1000),
    city: {
      name: 'Hamburg',
      location: {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
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
  },
  {
    id: 'f022890c-c1a4-4838-9b8b-7ea508ee8779',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel',
    price: 234,
    city: {
      name: 'Dusseldorf',
      location: {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 4.7,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Dusseldorf.',
    bedrooms: 2,
    goods: [
      ' Baby seat', 'Kitchen', 'Dishwasher', ' Cabel TV', ' Fridge'
    ],
    host: {
      name: 'Cat Con',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: ['img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    maxAdults: 4,
  }
];

export default mockOffers;
