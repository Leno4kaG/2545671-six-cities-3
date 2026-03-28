import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { Offer } from '../types/offer';

const selectOffers = (state: State) => state.offers.offers;

export const selectFavoriteOffers = createSelector(
  [selectOffers],
  (offers): Offer[] => offers.filter((offer) => offer.isFavorite)
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
