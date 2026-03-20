import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { City, Offer } from '../types/offer';
import { CITIES } from '../consts/consts';

import { fetchAllOffers } from './api-action';

type State = {
  city: City;
  offers: Offer[];
  isLoading: boolean;
}

const initialState: State = {
  city: CITIES[0],
  offers: [],
  isLoading: false,
};

const offerSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllOffers.pending,
      (state: State) => {
        state.isLoading = true;
      })
      .addCase(fetchAllOffers.fulfilled,
        (state: State, action: PayloadAction<Offer[]>) => {
          state.offers = action.payload;
          state.isLoading = false;
        })
      .addCase(fetchAllOffers.rejected,
        (state: State) => {
          state.isLoading = false;
        });
  },
});

export const { setCity } = offerSlice.actions;
export const offerReducer = offerSlice.reducer;
