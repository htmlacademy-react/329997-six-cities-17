import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveToken, dropToken } from '../services/token';
import { APIRoute } from '../const/const.js';
import { AuthData } from '../types/auth-data-type';
import { UserData } from '../types/user-data-type';
import { ApiActionType } from '../types/api-action-type.js';
import { Offer } from '../types/offer-type.js';
import { OfferExtended } from '../types/offer-extended-type.js';
import { OfferComment } from '../types/offer-comment-type.js';
import { OfferCommentPost } from '../types/offer-comment-post-type.js';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, ApiActionType>(
  'offers/fetchOffers', async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  });

export const fetchOfferExtendedAction = createAsyncThunk<OfferExtended, string, ApiActionType>(
  'offers/fetchOfferExtended', async (id, { extra: api }) => {
    const { data } = await api.get<OfferExtended>(`${APIRoute.Offers}/${id}`);
    return data;
  });

export const fetchOfferExtendedCommentsAction = createAsyncThunk<OfferComment[], string, ApiActionType>(
  'offers/fetchOfferExtendedComments', async (id, { extra: api }) => {
    const { data } = await api.get<OfferComment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  });

export const fetchOffersNearbyAction = createAsyncThunk<Offer[], string, ApiActionType>(
  'offers/fetchOffersNearby', async (id, { extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  });

export const checkAuthAction = createAsyncThunk<UserData, undefined, ApiActionType>(
  'user/checkAuth', async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  });

export const loginAction = createAsyncThunk<UserData, AuthData, ApiActionType>(
  'user/login', async ({ login: email, password }, { extra: api }) => {
    const { data, data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    return data;
  });

export const logoutAction = createAsyncThunk<void, undefined, ApiActionType>(
  'user/logout', async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  });

export const submitCommentAction = createAsyncThunk<void, OfferCommentPost, ApiActionType>(
  'offers/submitComment', async ({ comment, rating, id }, { dispatch, extra: api }) => {
    await api.post<OfferCommentPost>(`${APIRoute.Comments}/${id}`, { comment, rating });
    dispatch(fetchOfferExtendedCommentsAction(id));
  });
