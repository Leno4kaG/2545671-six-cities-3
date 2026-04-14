import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { Offer } from '../types/offer';

const selectFavorites = (state: State) => state.favoritesReducer.favorites;

export const selectFavoriteOffers = createSelector(
  [selectFavorites],
  (favorites): Offer[] => favorites
);

export const selectFavoritesByCity = createSelector(
  [selectFavoriteOffers],
  (favorites): Record<string, Offer[]> => {
    const grouped = favorites.reduce<Record<string, Offer[]>>((acc, offer) => {
      const city = offer.city && offer.city.name ? offer.city.name : 'Unknown';

      if (!acc[city]) {
        acc[city] = [];
      }
      acc[city].push(offer);
      return acc;
    }, {});
    return grouped;
  }
);

export const selectFavoriteCities = createSelector(
  [selectFavoritesByCity],
  (byCity) => Object.keys(byCity)
);
