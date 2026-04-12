import { Action } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import { AuthorizationStatus, CITIES } from '../consts/consts';

export type AppThunkDispatch = ThunkDispatch<State,
  ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeState = (initialState?: Partial<State>): State => ({
  offerReducer: {
    city: CITIES[0],
    offers: [],
    isLoading: false,
    error: null,
  },
  currentOfferReducer: {
    currentOffer: null,
    isLoading: false,
    isOfferNotFound: false,
    nearbyOffers: [],
  },
  favoritesReducer: {
    favorites: [],
    isLoading: false,
    favoriteError: null,
  },
  reviewsReducer: {
    reviews: [],
    isLoading: false,
    isPosting: false,
    postError: null,
  },
  userReducer: {
    authorizationStatus: AuthorizationStatus.Unknown,
    user: null,
  },
  ...initialState ?? {},
});
