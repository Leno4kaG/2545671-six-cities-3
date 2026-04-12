import mockOffers from '../../mock/mock-offers';
import { Offer } from '../../types/offer';
import { clearOffer, currentOfferReducer, setOfferNotFound } from './current-offer-slice';
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

describe('currentOffer Slice', () => {
  it('should have correct initial state (explicit)', () => {
    const actual = currentOfferReducer(undefined, { type: '' });
    expect(actual).toEqual(initialState);
  });
  it('setOfferNotFound reducer should set isOfferNotFound to true', () => {
    const next = currentOfferReducer(initialState, setOfferNotFound(true));
    expect(next.isOfferNotFound).toBe(true);
  });
  it('should clear fields correctly on clearOffer', () => {
    const update = {
      currentOffer: mockOffers[1],
      isLoading: true,
      isOfferNotFound: true,
      nearbyOffers: [],
    };

    const next = currentOfferReducer(update, clearOffer());
    expect(next.currentOffer).toBeNull();
    expect(next.isOfferNotFound).toBe(false);
    expect(next.isLoading).toBe(false);
  });
  it('should set isLoading = true and isOfferNotFound = false on fetchOfferById.pending', () => {
    const next = currentOfferReducer(initialState, fetchOfferById.pending('', ''));
    expect(next.isLoading).toBe(true);
    expect(next.isOfferNotFound).toBe(false);
  });
  it('should set isLoading = false and update currentOffer when fetchOfferById.fulfilled', () => {
    const state = { ...initialState, isLoading: true };
    const payload = mockOffers[1];
    const next = currentOfferReducer(state, fetchOfferById.fulfilled(payload, '', ''));
    expect(next.isLoading).toBe(false);
    expect(next.currentOffer).toEqual(payload);
  });
  it('sets isLoading to false and isOfferNotFound to true on fetchOfferById.rejected', () => {
    const state = { ...initialState, isLoading: true, isOfferNotFound: false };
    const next = currentOfferReducer(state, fetchOfferById.rejected(null, '', ''));
    expect(next.isLoading).toBe(false);
    expect(next.isOfferNotFound).toBe(true);
  });

  it('sets nearbyOffers from payload on fetchNearbyOffersById.fulfilled', () => {
    const payload = mockOffers.slice(2, 5);
    const next = currentOfferReducer(initialState, fetchNearbyOffersById.fulfilled(payload, '', ''));
    expect(next.nearbyOffers).toEqual(payload);
  });
  it('clears nearbyOffers on fetchNearbyOffersById.rejected', () => {
    const payload = mockOffers.slice(2, 5);
    const state = { ...initialState, nearbyOffers: payload };
    const next = currentOfferReducer(state, fetchNearbyOffersById.rejected(null, '', ''));
    expect(next.nearbyOffers).toEqual([]);
  });

  it('updates currentOffer and nearbyOffers on postFavoriteAction.fulfilled', () => {
    const nearby = mockOffers.slice(0, 3);
    const state = { ...initialState, currentOffer: nearby[1], nearbyOffers: nearby };

    const updated: Offer = {
      ...nearby[1],
      isFavorite: !nearby[1].isFavorite,
      price: (nearby[1].price ?? 0) + 1,
    };
    const action = postFavoriteAction.fulfilled(updated, '', { offerId: updated.id, status: Number(updated.isFavorite) });
    const next = currentOfferReducer(state, action);

    expect(next.currentOffer).toEqual(updated);
    expect(next.nearbyOffers.find((offer) => offer.id === updated.id)).toEqual(updated);
    expect(next.nearbyOffers.find((offer) => offer.id === nearby[0].id)).toEqual(nearby[0]);
  });
});
