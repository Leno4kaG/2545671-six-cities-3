import { Offer } from '../../types/offer';
import { City } from '../../types/offer';
import { CITIES } from '../../consts/consts';
import { offerReducer, setCity, setError } from './offers-slice';
import { fetchAllOffers, postFavoriteAction } from '../api-action/api-action';
import mockOffers from '../../mock/mock-offers';

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

describe('Offers Slice', () => {
  it('should have correct initial state (explicit)', () => {
    const actual = offerReducer(undefined, { type: '' });
    expect(actual).toEqual(initialState);
  });
  it('setCity reducer should update city', () => {
    const newCity = CITIES[2];
    const next = offerReducer(initialState, setCity(newCity));
    expect(next.city).toEqual(newCity);
  });
  it('setError reducer should update error', () => {
    const withError = offerReducer(initialState, setError('Some error'));
    expect(withError.error).toBe('Some error');

    const cleared = offerReducer(withError, setError(null));
    expect(cleared.error).toBeNull();
  });
  it('should set isLoading = true on fetchAllOffers.pending', () => {
    const next = offerReducer(initialState, fetchAllOffers.pending('', undefined));
    expect(next.isLoading).toBe(true);
  });
  it('should set isLoading = false and update offers when fetchAllOffers.fulfilled', () => {
    const state = { ...initialState, isLoading: true };
    const payload = mockOffers;
    const next = offerReducer(state, fetchAllOffers.fulfilled(payload, '', undefined));
    expect(next.isLoading).toBe(false);
    expect(next.offers).toEqual(payload);
  });
  it('sets isLoading to false on fetchAllOffers.rejected', () => {
    const state = { ...initialState, isLoading: true };
    const next = offerReducer(state, fetchAllOffers.rejected(null, '', undefined));
    expect(next.isLoading).toBe(false);
  });

  it('updates offer on postFavoriteAction.fulfilled', () => {
    const originalOffers = mockOffers.slice(0, 3);
    const state = { ...initialState, offers: originalOffers };

    const updated: Offer = {
      ...originalOffers[1],
      isFavorite: !originalOffers[1].isFavorite,
      price: (originalOffers[1].price ?? 0) + 1
    };

    const next = offerReducer(state, postFavoriteAction.fulfilled(updated, '', { offerId: updated.id, status: Number(updated.isFavorite) }));
    expect(next.offers.find((offer) => offer.id === updated.id)).toEqual(updated);
    expect(next.offers.find((offer) => offer.id === originalOffers[0].id)).toEqual(originalOffers[0]);
  });
});
