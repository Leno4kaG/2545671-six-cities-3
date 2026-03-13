import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers } from './action';

import { City, Offer } from '../types/offer';
import { CITIES } from '../consts/consts';

type State = {
  city: City;
  offers: Offer[];
}

const initialState: State = {
  city: CITIES[0],
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
