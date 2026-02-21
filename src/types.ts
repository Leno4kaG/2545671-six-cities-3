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
  //name: string;
  // location: {
  //  latitude: number;
  //  longitude: number;
  //  zoom: number;
  // };
};

