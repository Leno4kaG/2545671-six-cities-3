import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../consts/consts';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { AuthInfo } from '../types/auth-info';


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

export const checkAuthAction = createAsyncThunk<
  void,
  void,
  { extra: AxiosInstance }
>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get('/login');
      dispatch({ type: 'offers/setAuthorizationStatus', payload: AuthorizationStatus.Auth });
    } catch {
      dispatch({ type: 'offers/setAuthorizationStatus', payload: AuthorizationStatus.NoAuth });
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
      dispatch({ type: 'offers/setUser', payload: data.data });
      dispatch({ type: 'offers/setAuthorizationStatus', payload: AuthorizationStatus.Auth });
    } catch {
      dispatch({ type: 'offers/setError', payload: 'Access deny' });
      dispatch({ type: 'offers/setAuthorizationStatus', payload: AuthorizationStatus.NoAuth });
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
    dispatch({ type: 'offers/setUser', payload: null });
    dispatch({ type: 'offers/setAuthorizationStatus', payload: AuthorizationStatus.NoAuth });
  },
);

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => {
      dispatch({ type: 'offers/setError', payload: null });
    }, TIMEOUT_SHOW_ERROR);
  });
