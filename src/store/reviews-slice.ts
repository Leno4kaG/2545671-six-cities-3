import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Review } from '../types/review';

import { fetchReviewsByOfferId } from './api-action';

type ReviewsState = {
  reviews: Review[];
  isLoading: boolean;
}

const initialState: ReviewsState = {
  reviews: [],
  isLoading: false,
};

const reviewsSlice = createSlice(
  {
    name: 'reviews',
    initialState,
    reducers: {
      clearReviews(state) {
        state.reviews = [];
        state.isLoading = false;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchReviewsByOfferId.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchReviewsByOfferId.fulfilled, (state, action: PayloadAction<Review[]>) => {
          state.reviews = action.payload;
          state.isLoading = false;
        })
        .addCase(fetchReviewsByOfferId.rejected, (state) => {
          state.isLoading = false;
          state.reviews = [];
        });
    }
  });

export const { clearReviews } = reviewsSlice.actions;
export const reviewsReducer = reviewsSlice.reducer;
