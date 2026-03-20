import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';

export const setCity = createAction<City>('main/changeCity');
export const setOffers = createAction<Offer[]>('main/setOffers');
