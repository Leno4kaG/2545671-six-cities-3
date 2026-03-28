import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { City, Offer } from '../types/offer';
import { fetchAllOffers } from './api-action';
import { CITIES } from '../consts/consts';


type OffersState = {
  city: City;
  offers: Offer[];
  isLoading: boolean;
  error: string | null;
}

const initialState: OffersState = {
  city: CITIES[0],
  offers: [],
  isLoading: false,
  error: null,
};

const offerSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllOffers.pending,
      (state: OffersState) => {
        state.isLoading = true;
      })
      .addCase(fetchAllOffers.fulfilled,
        (state: OffersState, action: PayloadAction<Offer[]>) => {
          state.offers = action.payload;
          state.isLoading = false;
        })
      .addCase(fetchAllOffers.rejected,
        (state: OffersState) => {
          state.isLoading = false;
        });
  },
});

export const { setCity, setError } = offerSlice.actions;
export const offerReducer = offerSlice.reducer;
