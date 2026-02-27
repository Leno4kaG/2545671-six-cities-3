export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TCity = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  images: string[];
  description: string;
  bedrooms: number;
  goods: string[];
  maxAdults: number;
  host: THost;
  city: TCity;
};

