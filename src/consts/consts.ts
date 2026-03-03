
export enum PlacesSorting {
  Popular = 'Popular',
  PriceToLow = 'Price: low to high',
  PriceToHigh = 'Price: high to low',
  Top = 'Top rated first'
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Error = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DEFAULT_TYPE = 'Paris';

export const RATING = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' }
];

export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;
