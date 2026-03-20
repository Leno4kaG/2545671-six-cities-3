import { PlacesSorting } from '../consts/consts';
import { Offer } from '../types/offer';

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
