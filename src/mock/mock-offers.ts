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
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
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
    id: '4ff6655b-ce3c-4081-9062-8ae673928d6e',
    title: 'The Joshua Tree House',
    type: 'room',
    price: getRandomInteger(10, 1000),
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: [
      ' Wi-Fi', ' Washing machine', ' Towels', ' Coffee machine', ' Baby seat'
    ],
    host: {
      name: 'Sara Parker',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    maxAdults: 4,
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 2.6
  },
  {
    id: '08b863a2-5b42-4c54-a818-f7527a0e8d50',
    title: 'Tile House',
    type: 'hotel',
    price: 402,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: [
      ' Wi-Fi', ' Washing machine', ' Coffee machine', ' Baby seat'
    ],
    host: {
      name: 'Sara Parker',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    maxAdults: 4,
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 2.5
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
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16
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
    id: 'cb9575de-467b-4984-b1fa-c62a8f80be59',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: getRandomInteger(10, 1000),
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: [
      ' Wi-Fi', ' Washing machine', ' Towels', ' Coffee machine', ' Baby seat'
    ],
    host: {
      name: 'Sara Parker',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    maxAdults: 4,
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 2
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
    location: {
      latitude: 50.867557,
      longitude: 4.371696999999999,
      zoom: 16
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
    id: 'c27dd2bf-7519-42af-a28d-dd431f784a86',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'hotel',
    price: getRandomInteger(10, 1000),
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.827557,
      longitude: 4.336697,
      zoom: 16
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: [
      ' Wi-Fi', ' Washing machine', ' Towels', ' Coffee machine', ' Baby seat'
    ],
    host: {
      name: 'Sati Park',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    maxAdults: 3,
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 1.8
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
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16
    },
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
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
    id: 'eb5e89dd-ab3d-49bf-bf54-52e76c44452c',
    title: 'Amazing and Extremely Central Flat',
    type: 'house',
    price: getRandomInteger(10, 1000),
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16
    },
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
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 1.1
  },
  {
    id: 'c2c00a0f-6fe7-4e1c-9ae7-f9304120e57a',
    title: 'Tile House',
    type: 'house',
    price: getRandomInteger(10, 1000),
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.397540000000006,
      longitude: 4.9099759999999995,
      zoom: 16
    },
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
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 4.5
  },
  {
    id: '0c40fdbe-4cb2-4bc7-8e48-cce018e40d42',
    title: 'House in countryside',
    type: 'apartment',
    price: getRandomInteger(10, 1000),
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37454,
      longitude: 4.881976,
      zoom: 16
    },
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
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 2.3
  },
  {
    id: '203dba19-50cf-403e-9654-71441ffe0309',
    title: 'House in countryside',
    type: 'room',
    price: getRandomInteger(10, 1000),
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.367540000000005,
      longitude: 4.883976,
      zoom: 16
    },
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
    isFavorite: !getRandomInteger(0, 1),
    isPremium: !getRandomInteger(0, 1),
    rating: 5
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
    location: {
      latitude: 53.563341,
      longitude: 10.019654000000001,
      zoom: 16
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
    location: {
      latitude: 51.217402,
      longitude: 6.7693140000000005,
      zoom: 16
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
