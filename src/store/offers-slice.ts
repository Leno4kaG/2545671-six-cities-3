import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { City, Offer } from '../types/offer';
import { AuthorizationStatus, CITIES } from '../consts/consts';

import { fetchAllOffers } from './api-action';
import { AuthInfo } from '../types/auth-info';

type State = {
  city: City;
  offers: Offer[];
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: AuthInfo | null;
  error: string | null;
}

const initialState: State = {
  city: CITIES[0],
  offers: [],
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  error: null,
};

const offerSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
    setAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    setUser(state, action: PayloadAction<AuthInfo | null>) {
      state.user = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    }
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

export const { setCity, setAuthorizationStatus, setUser, setError } = offerSlice.actions;
export const offerReducer = offerSlice.reducer;
