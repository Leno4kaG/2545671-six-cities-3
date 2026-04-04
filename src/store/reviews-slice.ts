import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Review } from '../types/review';

import { fetchReviewsByOfferId, postReviewAction } from './api-action';

type ReviewsState = {
  reviews: Review[];
  isLoading: boolean;
  isPosting: boolean;
  postError: string | null;
}

const initialState: ReviewsState = {
  reviews: [],
  isLoading: false,
  isPosting: false,
  postError: null,
};

const reviewsSlice = createSlice(
  {
    name: 'reviews',
    initialState,
    reducers: {
      clearReviews(state) {
        state.reviews = [];
        state.isLoading = false;
        state.isPosting = false;
        state.postError = null;
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
        })
        .addCase(postReviewAction.pending, (state) => {
          state.isPosting = true;
          state.postError = null;
        })
        .addCase(postReviewAction.fulfilled, (state, action: PayloadAction<Review>) => {
          state.reviews = [action.payload, ...state.reviews];
          state.isPosting = false;
          state.postError = null;
        })
        .addCase(postReviewAction.rejected, (state, action) => {
          state.isPosting = false;
          state.postError = action.error?.message ?? 'Failed to post review';
        });
    }
  });

export const { clearReviews } = reviewsSlice.actions;
export const reviewsReducer = reviewsSlice.reducer;
