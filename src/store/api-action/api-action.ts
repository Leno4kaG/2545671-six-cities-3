import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus, TIMEOUT_SHOW_ERROR, APIRoute } from '../../consts/consts';
import { AuthData } from '../../types/auth-data';
import { dropToken, saveToken } from '../../services/token';
import { AuthInfo } from '../../types/auth-info';
import { setOfferNotFound } from '../current-offer-slice/current-offer-slice';
import { setUser, setAuthorizationStatus } from '../user-slice/user-slice';
import { Review } from '../../types/review';
import { setError } from '../offers-slice/offers-slice';

export const fetchAllOffers = createAsyncThunk<
  Offer[],
  void,
  { extra: AxiosInstance }
>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const response = await api.get<Offer[]>(APIRoute.Offers);
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
      const response = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
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
    const response = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
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
    const response = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    return response.data;
  }
);

export const fetchFavoriteAction = createAsyncThunk<
  Offer[],
  void,
  { extra: AxiosInstance }
>(
  'favorite/fetchFavorite',
  async (_arg, { extra: api }) => {
    const response = await api.get<Offer[]>(APIRoute.Favorites);
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
    const response = await api.post<Review>(`${APIRoute.Comments}/${id}`, { comment, rating });
    return response.data;
  }
);

export const postFavoriteAction = createAsyncThunk<
  Offer,
  { offerId: string; status: number },
  { extra: AxiosInstance }
>(
  'favorite/postFavorite',
  async ({ offerId, status }, { extra: api }) => {
    const response = await api.post<Offer>(`${APIRoute.Favorites}/${offerId}/${status}`);
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
      const response = await api.get<AuthInfo>(APIRoute.Login);
      dispatch(setUser(response.data));
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(fetchFavoriteAction());
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      dispatch(setUser(null));
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
      const data = await api.post<AuthInfo>(APIRoute.Login, { email, password });
      saveToken(data.data.token);
      dispatch(setUser(data.data));
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(fetchFavoriteAction());
    } catch {
      dispatch(setError('Access deny'));
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
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
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setUser(null));
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => {
      dispatch(setError(null));
    }, TIMEOUT_SHOW_ERROR);
  });
