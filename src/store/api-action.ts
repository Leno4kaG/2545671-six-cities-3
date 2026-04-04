import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../consts/consts';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { AuthInfo } from '../types/auth-info';
import { setOfferNotFound } from './current-offer-slice';
import { Review } from '../types/review';

export const fetchAllOffers = createAsyncThunk<
  Offer[],
  void,
  { extra: AxiosInstance }
>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const response = await api.get<Offer[]>('/offers');
    return response.data;
  }
);

export const fetchOfferById = createAsyncThunk<
  Offer,
  string,
  { extra: AxiosInstance }
>(
  'currentOffer/fetchOfferById',
  async (id, { dispatch, extra: api }) => {
    try {
      dispatch(setOfferNotFound(false));
      const response = await api.get<Offer>(`/offers/${id}`);
      return response.data;
    } catch (err) {
      dispatch(setOfferNotFound(true));
      throw err;
    }
  }
);

export const fetchNearbyOffersById = createAsyncThunk<
  Offer[],
  string,
  { extra: AxiosInstance }
>(
  'currentOffer/fetchNearbyOffersById',
  async (id, { extra: api }) => {
    const response = await api.get<Offer[]>(`/offers/${id}/nearby`);
    return response.data;
  }
);

export const fetchReviewsByOfferId = createAsyncThunk<
  Review[],
  string,
  { extra: AxiosInstance }
>(
  'reviews/fetchReviewsByOfferId',
  async (id, { extra: api }) => {
    const response = await api.get<Review[]>(`/comments/${id}`);
    return response.data;
  }
);

export const postReviewAction = createAsyncThunk<
  Review,
  { id: string; rating: number; comment: string },
  { extra: AxiosInstance }
>(
  'reviews/postReview',
  async ({ id, rating, comment }, { extra: api }) => {
    const response = await api.post<Review>(`/comments/${id}`, { comment, rating });
    return response.data;
  }
);

export const checkAuthAction = createAsyncThunk<
  void,
  void,
  { extra: AxiosInstance }
>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const response = await api.get<AuthInfo>('/login');
      dispatch({ type: 'user/setUser', payload: response.data });
      dispatch({ type: 'user/setAuthorizationStatus', payload: AuthorizationStatus.Auth });
    } catch {
      dispatch({ type: 'user/setAuthorizationStatus', payload: AuthorizationStatus.NoAuth });
    }
  }
);

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  { extra: AxiosInstance }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const data = await api.post<AuthInfo>('/login', { email, password });
      saveToken(data.data.token);
      dispatch({ type: 'user/setUser', payload: data.data });
      dispatch({ type: 'user/setAuthorizationStatus', payload: AuthorizationStatus.Auth });
    } catch {
      dispatch({ type: 'user/setError', payload: 'Access deny' });
      dispatch({ type: 'user/setAuthorizationStatus', payload: AuthorizationStatus.NoAuth });
    }
  }
);

export const logoutAction = createAsyncThunk<
  void,
  void,
  { extra: AxiosInstance }
>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete('/logout');
    dropToken();
    dispatch({ type: 'user/setUser', payload: null });
    dispatch({ type: 'user/setAuthorizationStatus', payload: AuthorizationStatus.NoAuth });
  },
);

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => {
      dispatch({ type: 'offers/setError', payload: null });
    }, TIMEOUT_SHOW_ERROR);
  });
