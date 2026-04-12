import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';

import { fetchOfferById, fetchNearbyOffersById, postFavoriteAction } from '../api-action/api-action';

type CurrentOfferSlice = {
  currentOffer: Offer | null;
  isLoading: boolean;
  isOfferNotFound: boolean;
  nearbyOffers: Offer[];
}

const initialState: CurrentOfferSlice = {
  currentOffer: null,
  isLoading: false,
  isOfferNotFound: false,
  nearbyOffers: [],
};

const currentOfferSlice = createSlice({
  name: 'currentOffer',
  initialState,
  reducers: {
    setOfferNotFound(state, action: PayloadAction<boolean>) {
      state.isOfferNotFound = action.payload;
    },
    clearOffer(state) {
      state.currentOffer = null;
      state.isOfferNotFound = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferById.pending, (state) => {
        state.isLoading = true;
        state.isOfferNotFound = false;
      })
      .addCase(fetchOfferById.fulfilled, (state, action: PayloadAction<Offer>) => {
        state.currentOffer = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOfferById.rejected, (state) => {
        state.isLoading = false;
        state.isOfferNotFound = true;
      })
      .addCase(fetchNearbyOffersById.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffersById.rejected, (state) => {
        state.nearbyOffers = [];
      })
      .addCase(postFavoriteAction.fulfilled, (state, action: PayloadAction<Offer>) => {
        const updated = action.payload;
        if (state.currentOffer && state.currentOffer.id === updated.id) {
          state.currentOffer = updated;
        }
        state.nearbyOffers = state.nearbyOffers.map((offer) => offer.id === updated.id ? updated : offer);
      });
  }
});

export const { setOfferNotFound, clearOffer } = currentOfferSlice.actions;
export const currentOfferReducer = currentOfferSlice.reducer;
