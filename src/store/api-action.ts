import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadOfferExtended, loadOffers, loadOffersNearby, requireAuthorization, setError, setLoadingStatus, setUserData } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const/const.js';
import { AuthData } from '../types/auth-data-type';
import { UserData } from '../types/user-data-type';
import { ApiActionType } from '../types/api-action-type.js';
import { Offer } from '../types/offer-type.js';
import { store } from '../store';
import { OfferExtended } from '../types/offer-extended-type.js';
import { OfferNearby } from '../types/offer-nearby-type.js';

export const fetchOffersAction = createAsyncThunk<void, undefined, ApiActionType>(
  'common/fetchOffers', async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    try {
      const { data } = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(loadOffers(data));
    } finally {
      dispatch(setLoadingStatus(false));
    }
  });

export const fetchOfferExtendedAction = createAsyncThunk<void, undefined, ApiActionType>(
  'common/fetchOfferExtended', async (id, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    try {
      const { data } = await api.get<OfferExtended>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOfferExtended(data));
    } finally {
      dispatch(setLoadingStatus(false));
    }
  });

export const fetchOffersNearbyAction = createAsyncThunk<void, undefined, ApiActionType>(
  'common/fetchOffersNearby', async (id, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    try {
      const { data } = await api.get<OfferNearby[]>(`${APIRoute.Offers}/${id}/nearby`);
      dispatch(loadOffersNearby(data));
    } finally {
      dispatch(setLoadingStatus(false));
    }
  });

export const checkAuthAction = createAsyncThunk<void, undefined, ApiActionType>(
  'user/checkAuth', async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setUserData(null));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, ApiActionType>(
  'user/login', async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(checkAuthAction()); //приходится проверять статус авторизации для заполнения данных пользователя и обновления хедера, это нормально?
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ApiActionType>(
  'user/logout', async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(checkAuthAction()); //приходится проверять статус авторизации для заполнения данных пользователя и обновления хедера, это нормально?
  },
);

export const clearErrorAction = createAsyncThunk(
  'common/clearError', () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
