import { vi } from 'vitest';

vi.mock('../../services/process-error-handle', () => ({
  processErrorHandle: () => { },
}));

import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../../services/api';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { State } from '../../types/state';
import { AppThunkDispatch, extractActionsTypes } from '../../utils/mocks';
import mockOffers from '../../mock/mock-offers';
import { mockComments } from '../../mock/mock-comments';
import {
  fetchAllOffers, fetchOfferById, fetchNearbyOffersById,
  fetchReviewsByOfferId, fetchFavoriteAction, postReviewAction,
  postFavoriteAction, checkAuthAction
} from './api-action';
import { APIRoute } from '../../consts/consts';
import { setOfferNotFound } from '../current-offer-slice/current-offer-slice';
import { setAuthorizationStatus } from '../user-slice/user-slice';

describe('Async actions', () => {

  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>,
    AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ offerReducer: { offers: [] }, userReducer: {}, currentOfferReducer: {}, reviewsReducer: {}, favoritesReducer: {} });
  });

  describe('fetchAllOffers', () => {
    it('should dispatch "fetchAllOffers.pending", "fetchAllOffers.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet('/offers').reply(200, mockOffers);

      await store.dispatch(fetchAllOffers());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchAllOffers.pending.type,
        fetchAllOffers.fulfilled.type
      ]);

      const fetchAllOffersFulfilled = emittedActions.at(1) as ReturnType<typeof fetchAllOffers.fulfilled>;
      expect(fetchAllOffersFulfilled.payload).toEqual(mockOffers);
    });
  });
  it('should dispatch "fetchAllOffers.pending", "fetchAllOffers.rejected" when server response 400', async () => {
    mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

    await store.dispatch(fetchAllOffers());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchAllOffers.pending.type,
      fetchAllOffers.rejected.type,
    ]);
  });
  it('dispatches pending and fulfilled when server returns 200', async () => {
    const sampleOffer = mockOffers[0];
    mockAxiosAdapter.onGet(`${APIRoute.Offers}/${sampleOffer.id}`).reply(200, sampleOffer);

    await store.dispatch(fetchOfferById(sampleOffer.id));

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types).toEqual([
      fetchOfferById.pending.type,
      setOfferNotFound.type,
      fetchOfferById.fulfilled.type]);

    const fulfilled = actions.find((action) =>
      action.type === fetchOfferById.fulfilled.type) as ReturnType<typeof fetchOfferById.fulfilled>;
    expect(fulfilled.payload).toEqual(sampleOffer);
  });
  it('dispatches setOfferNotFound(true) and rejected when server returns 400', async () => {
    const fakeId = 'non-existing-id';
    mockAxiosAdapter.onGet(`/offers/${fakeId}`).reply(400);

    await store.dispatch(fetchOfferById(fakeId));

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types[0]).toBe(fetchOfferById.pending.type);
    expect(types).toContain(fetchOfferById.rejected.type);

  });
  it('dispatches setOfferNotFound(true) and rejected when server returns 404', async () => {
    const fakeId = 'non-existing-id';
    mockAxiosAdapter.onGet(`${APIRoute.Offers}/${fakeId}`).reply(404);

    await store.dispatch(fetchOfferById(fakeId));

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types[0]).toBe(fetchOfferById.pending.type);
    expect(types).toContain(fetchOfferById.rejected.type);


    const setNotFoundAction = actions.find((action) => action.type === setOfferNotFound.type);
    expect(setNotFoundAction).toBeDefined();
  });
  it('dispatches pending and fulfilled for fetchNearbyOffersById when server returns 200', async () => {
    const sampleOffer = mockOffers[0];
    const nearby = [mockOffers[1], mockOffers[2]];
    mockAxiosAdapter.onGet(`${APIRoute.Offers}/${sampleOffer.id}/nearby`).reply(200, nearby);

    await store.dispatch(fetchNearbyOffersById(sampleOffer.id));

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types).toEqual([
      'currentOffer/fetchNearbyOffersById/pending',
      'currentOffer/fetchNearbyOffersById/fulfilled'
    ]);

    const fulfilled = actions.find((action) => action.type === 'currentOffer/fetchNearbyOffersById/fulfilled') as ReturnType<typeof fetchNearbyOffersById.fulfilled>;
    expect(fulfilled.payload).toEqual(nearby);
  });
  it('dispatches pending and rejected for fetchNearbyOffersById when server returns 500', async () => {
    const sampleOffer = mockOffers[0];
    mockAxiosAdapter.onGet(`${APIRoute.Offers}/${sampleOffer.id}/nearby`).reply(500);

    await store.dispatch(fetchNearbyOffersById(sampleOffer.id));

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types[0]).toBe('currentOffer/fetchNearbyOffersById/pending');
    expect(types).toContain('currentOffer/fetchNearbyOffersById/rejected');
  });
  it('dispatches pending and fulfilled for fetchReviewsByOfferId when server returns 200', async () => {
    const sampleOffer = mockOffers[0];
    const comments = mockComments;
    mockAxiosAdapter.onGet(`${APIRoute.Comments}/${sampleOffer.id}`).reply(200, comments);

    await store.dispatch(fetchReviewsByOfferId(sampleOffer.id));

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types).toEqual([
      fetchReviewsByOfferId.pending.type,
      fetchReviewsByOfferId.fulfilled.type
    ]);

    const fulfilled = actions.find((action) => action.type === fetchReviewsByOfferId.fulfilled.type) as ReturnType<typeof fetchReviewsByOfferId.fulfilled>;
    expect(fulfilled.payload).toEqual(comments);
  });

  it('dispatches pending and rejected for fetchReviewsByOfferId when server returns 500', async () => {
    const sampleOffer = mockOffers[0];
    mockAxiosAdapter.onGet(`${APIRoute.Comments}/${sampleOffer.id}`).reply(500);

    await store.dispatch(fetchReviewsByOfferId(sampleOffer.id));

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types[0]).toBe(fetchReviewsByOfferId.pending.type);
    expect(types).toContain(fetchReviewsByOfferId.rejected.type);
  });
  it('dispatches pending and fulfilled for fetchFavoriteAction when server returns 200', async () => {
    const favorites = [mockOffers[0], mockOffers[1]];
    mockAxiosAdapter.onGet(APIRoute.Favorites).reply(200, favorites);

    await store.dispatch(fetchFavoriteAction());

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types).toEqual([
      fetchFavoriteAction.pending.type,
      fetchFavoriteAction.fulfilled.type
    ]);

    const fulfilled = actions.find((action) => action.type === fetchFavoriteAction.fulfilled.type) as ReturnType<typeof fetchFavoriteAction.fulfilled>;
    expect(fulfilled.payload).toEqual(favorites);
  });
  it('dispatches pending and rejected for fetchFavoriteAction when server returns 500', async () => {
    mockAxiosAdapter.onGet(APIRoute.Favorites).reply(500);

    await store.dispatch(fetchFavoriteAction());

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types[0]).toBe(fetchFavoriteAction.pending.type);
    expect(types).toContain(fetchFavoriteAction.rejected.type);
  });
  it('dispatches pending and fulfilled for postReviewAction when server returns 200', async () => {
    const sampleOffer = mockOffers[0];
    const newReview = {
      id: 'r1',
      user: { name: 'User', avatarUrl: 'https://url-to-image/image23.png', isPro: true },
      rating: 5,
      comment: 'Great!',
      date: '2023-01-01T00:00:00.000Z'
    };

    mockAxiosAdapter.onPost(`${APIRoute.Comments}/${sampleOffer.id}`).reply(200, newReview);

    await store.dispatch(postReviewAction({ id: sampleOffer.id, rating: 5, comment: 'Great!' }));

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types).toEqual([
      postReviewAction.pending.type,
      postReviewAction.fulfilled.type
    ]);

    const fulfilled = actions.find((action) => action.type === postReviewAction.fulfilled.type) as ReturnType<typeof postReviewAction.fulfilled>;
    expect(fulfilled.payload).toEqual(newReview);
  });

  it('dispatches pending and rejected for postReviewAction when server returns 500', async () => {
    const sampleOffer = mockOffers[0];
    mockAxiosAdapter.onPost(`${APIRoute.Comments}/${sampleOffer.id}`).reply(500);

    await store.dispatch(postReviewAction({ id: sampleOffer.id, rating: 4, comment: 'Nice' }));

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types[0]).toBe(postReviewAction.pending.type);
    expect(types).toContain(postReviewAction.rejected.type);
  });
  it('dispatches pending and fulfilled for postFavoriteAction when server returns 200', async () => {
    const sampleOffer = mockOffers[0];
    const updatedOffer = { ...sampleOffer, isFavorite: !sampleOffer.isFavorite };

    mockAxiosAdapter.onPost(`${APIRoute.Favorites}/${sampleOffer.id}/1`).reply(200, updatedOffer);

    await store.dispatch(postFavoriteAction({ offerId: sampleOffer.id, status: 1 }));

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types).toEqual([
      postFavoriteAction.pending.type,
      postFavoriteAction.fulfilled.type
    ]);

    const fulfilled = actions.find((action) => action.type === postFavoriteAction.fulfilled.type) as ReturnType<typeof postFavoriteAction.fulfilled>;
    expect(fulfilled.payload).toEqual(updatedOffer);
  });

  it('dispatches pending and rejected for postFavoriteAction when server returns 500', async () => {
    const sampleOffer = mockOffers[0];

    mockAxiosAdapter.onPost(`${APIRoute.Favorites}/${sampleOffer.id}/0`).reply(500);

    await store.dispatch(postFavoriteAction({ offerId: sampleOffer.id, status: 0 }));

    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types[0]).toBe(postFavoriteAction.pending.type);
    expect(types).toContain(postFavoriteAction.rejected.type);
  });
  it('should dispatch pending and fulfilled when server returns 200', async () => {
    mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

    await store.dispatch(checkAuthAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toContain(checkAuthAction.pending.type);
    expect(actions).toContain(checkAuthAction.fulfilled.type);
  });

  it('should dispatch pending and fulfilled and set NoAuth when server returns 400', async () => {
    mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

    await store.dispatch(checkAuthAction());
    const actions = store.getActions();
    const types = extractActionsTypes(actions);

    expect(types[0]).toBe(checkAuthAction.pending.type);

    expect(types).toContain(checkAuthAction.fulfilled.type);

    const setAuthAction = actions.find((action) => action.type === setAuthorizationStatus.type);
    expect(setAuthAction).toBeDefined();

    const setUserAction = actions.find((action) => action.type === 'user/setUser');
    expect(setUserAction).toBeDefined();
  });
});


