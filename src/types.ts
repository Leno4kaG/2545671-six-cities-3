export type OfferProps = {
  id?: string;
  title?: string;
  type?: string;
  price?: number;
  isFavorite?: boolean;
  isPremium?: boolean;
  rating?: number;
  previewImage?: string;
  images?: string;
  description?: string;
  bedrooms?: number;
  goods?: string[];
  maxAdults?: number;
};
