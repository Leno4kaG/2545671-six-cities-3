import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { fetchFavoriteAction, postFavoriteAction } from '../api-action/api-action';


type FavoritesState = {
  favorites: Offer[];
  isLoading: boolean;
  favoriteError: string | null;
}

const initialState: FavoritesState = {
  favorites: [],
  isLoading: false,
  favoriteError: null,
};

const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    clearFavorites(state) {
      state.favorites = [];
      state.favoriteError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteAction.pending, (state: FavoritesState) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoriteAction.fulfilled, (state: FavoritesState, action: PayloadAction<Offer[]>) => {
        state.isLoading = false;
        state.favorites = action.payload;
      })
      .addCase(fetchFavoriteAction.rejected, (state: FavoritesState) => {
        state.isLoading = false;
      })
      .addCase(postFavoriteAction.pending, (state: FavoritesState) => {
        state.isLoading = true;
      })
      .addCase(postFavoriteAction.fulfilled, (state, action: PayloadAction<Offer>) => {
        state.isLoading = false;
        state.favoriteError = null;
        const filteredFavorites = state.favorites.filter((offer) => offer.id !== action.payload.id);
        if (action.payload.isFavorite) {
          state.favorites = [...filteredFavorites, action.payload];
        } else {
          state.favorites = filteredFavorites;
        }
      })
      .addCase(postFavoriteAction.rejected, (state, action) => {
        state.isLoading = false;
        state.favoriteError = action.error?.message ?? 'Failed to change favorite status';
      });
  }
});

export const { clearFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
