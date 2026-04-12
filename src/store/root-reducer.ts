import { combineReducers } from '@reduxjs/toolkit';
import { offerReducer } from './offers-slice/offers-slice';
import { userReducer } from './user-slice/user-slice';
import { currentOfferReducer } from './current-offer-slice/current-offer-slice';
import { reviewsReducer } from './reviews-slice/reviews-slice';
import { favoritesReducer } from './favorites-slice/favorites-slice';

export const rootReducer = combineReducers({
  'offerReducer': offerReducer,
  'userReducer': userReducer,
  'currentOfferReducer': currentOfferReducer,
  'reviewsReducer': reviewsReducer,
  'favoritesReducer': favoritesReducer,
});
