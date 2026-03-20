import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AxiosInstance } from 'axios';

export const fetchAllOffers = createAsyncThunk<Offer[], void, { extra: AxiosInstance }>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const response = await api.get<Offer[]>('/offers');
    return response.data;
  }
);
