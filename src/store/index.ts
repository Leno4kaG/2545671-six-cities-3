import { configureStore } from '@reduxjs/toolkit';
import { offerReducer } from './offers-slice';
import { createAPI } from '../services/api';
import { userReducer } from './user-slice';
import { currentOfferReducer } from './current-offer-slice';
import { reviewsReducer } from './reviews-slice';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    offers: offerReducer,
    user: userReducer,
    currentOffer: currentOfferReducer,
    reviews: reviewsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }),
});
