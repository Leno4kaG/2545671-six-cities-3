import { PlacesSorting } from '../consts/consts';
import { Offer } from '../types/offer';
import { State } from '../types/state';
import { createSelector } from '@reduxjs/toolkit';

const getOffersFromState = (state: State) => state.offerReducer.offers;
const getCityNameFromState = (state: State) => state.offerReducer.city.name;

export function getBaseCards(offers: Offer[], cityName: string): Offer[] {
  const cityOffers = offers.filter((offer) => offer.city.name === cityName);
  return cityOffers;
}

export function sortOffers(baseCards: Offer[], selectedSorting: PlacesSorting): Offer[] {
  const cardsCopy = [...baseCards];
  switch (selectedSorting) {
    case PlacesSorting.PriceToLow:
      return cardsCopy.sort((a, b) => a.price - b.price);
    case PlacesSorting.PriceToHigh:
      return cardsCopy.sort((a, b) => b.price - a.price);
    case PlacesSorting.Top:
      return cardsCopy.sort((a, b) => b.rating - a.rating);
    case PlacesSorting.Popular:
    default:
      return cardsCopy;
  }
}

export const createFilteredAndSortedSelector = () =>
  createSelector(
    [getOffersFromState,
      getCityNameFromState,
      (_: State, selectedSorting: PlacesSorting) => selectedSorting],
    (offers, cityName, selectedSorting) => {
      const baseCards = getBaseCards(offers, cityName);
      return sortOffers(baseCards, selectedSorting);
    }
  );
