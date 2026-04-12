import { Offer } from '../../types/offer';
import { favoritesReducer, clearFavorites } from './favorites-slice';
import mockOffers from '../../mock/mock-offers';
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

describe('Favorites Slice', () => {
  it('should have correct initial state (explicit)', () => {
    const actual = favoritesReducer(undefined, { type: '' });
    expect(actual).toEqual(initialState);
  });
  it('should clear fields correctly on clearFavorites', () => {
    const update = {
      favorites: mockOffers,
      isLoading: true,
      favoriteError: 'Some FavoriteError',
    };

    const next = favoritesReducer(update, clearFavorites());
    expect(next.favorites).toEqual([]);
    expect(next.favoriteError).toBe(null);
  });
  it('should set isLoading = true on fetchFavoriteAction.pending', () => {
    const next = favoritesReducer(initialState, fetchFavoriteAction.pending('', undefined));
    expect(next.isLoading).toBe(true);
  });
  it('sets isLoading to false and updates favorites on fetchFavoriteAction.fulfilled', () => {
    const state = { ...initialState, isLoading: true };
    const payload = mockOffers.slice(0, 3);
    const next = favoritesReducer(state, fetchFavoriteAction.fulfilled(payload, '', undefined));
    expect(next.isLoading).toBe(false);
    expect(next.favorites).toEqual(payload);
  });
  it('sets isLoading to false on fetchFavoriteAction.rejected', () => {
    const state = { ...initialState, isLoading: true };
    const next = favoritesReducer(state, fetchFavoriteAction.rejected(null, '', undefined));
    expect(next.isLoading).toBe(false);
  });
  it('should set isLoading = true on fetchFavoriteAction.pending', () => {
    const arg = { offerId: '1', status: 1 };
    const next = favoritesReducer(initialState, postFavoriteAction.pending('', arg, undefined));
    expect(next.isLoading).toBe(true);
  });
  it('handles postFavoriteAction.fulfilled — adds/updates favorite when isFavorite = true', () => {
    const existing: Offer = { ...mockOffers[0], isFavorite: true };
    const other: Offer = { ...mockOffers[1], isFavorite: true };
    const state = { favorites: [existing, other], isLoading: true, favoriteError: 'old' };
    const payload: Offer = { ...existing, title: 'Updated title', isFavorite: true };

    const next = favoritesReducer(state, postFavoriteAction.fulfilled(payload, '', { offerId: payload.id, status: 1 }));

    expect(next.isLoading).toBe(false);
    expect(next.favoriteError).toBeNull();
    expect(next.favorites).toHaveLength(2);
    expect(next.favorites).toContainEqual(payload);
    expect(next.favorites).toContainEqual(other);
  });

  it('handles postFavoriteAction.fulfilled — removes favorite when isFavorite = false', () => {
    const existing: Offer = { ...mockOffers[0], isFavorite: true };
    const other: Offer = { ...mockOffers[1], isFavorite: true };
    const state = { favorites: [existing, other], isLoading: true, favoriteError: null };

    const payload: Offer = { ...existing, isFavorite: false };
    const next = favoritesReducer(state, postFavoriteAction.fulfilled(payload, '', { offerId: payload.id, status: 0 }));

    expect(next.isLoading).toBe(false);
    expect(next.favoriteError).toBeNull();
    expect(next.favorites).toHaveLength(1);
    expect(next.favorites).toContainEqual(other);
    expect(next.favorites).not.toContainEqual(existing);
  });

  it('handles postFavoriteAction.rejected — sets isLoading false and favoriteError from action.error.message', () => {
    const state = { favorites: mockOffers, isLoading: true, favoriteError: null };

    const errorMessage = new Error('Network Error');
    const next = favoritesReducer(state, postFavoriteAction.rejected(errorMessage, '', { offerId: '1', status: 1 },));

    expect(next.isLoading).toBe(false);
    expect(next.favoriteError).toBe('Network Error');
  });
});
