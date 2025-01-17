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
  'offerExtended/fetchOfferExtended', async (id, { extra: api }) => {
    const { data } = await api.get<OfferExtended>(`${APIRoute.Offers}/${id}`);
    return data;
  });

export const fetchOfferExtendedCommentsAction = createAsyncThunk<OfferComment[], string, ApiActionType>(
  'offerNearby/fetchOfferExtendedComments', async (id, { extra: api }) => {
    const { data } = await api.get<OfferComment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  });

export const fetchOffersNearbyAction = createAsyncThunk<Offer[], string, ApiActionType>(
  'offersNearby/fetchOffersNearby', async (id, { extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  });

export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, ApiActionType>(
  'offers/fetchOffersFavorite', async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  });

export const checkAuthAction = createAsyncThunk<UserData, undefined, ApiActionType>(
  'user/checkAuth', async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  });

export const loginAction = createAsyncThunk<UserData, AuthData, ApiActionType>(
  'user/login', async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data, data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(fetchOffersAction());
    dispatch(fetchFavoriteOffersAction());
    return data;
  });

export const logoutAction = createAsyncThunk<void, undefined, ApiActionType>(
  'user/logout', async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(fetchOffersAction());
  });

export const submitCommentAction = createAsyncThunk<void, OfferCommentPost, ApiActionType>(
  'offerExtended/submitComment', async ({ comment, rating, id }, { dispatch, extra: api }) => {
    await api.post<OfferCommentPost>(`${APIRoute.Comments}/${id}`, { comment, rating });
    dispatch(fetchOfferExtendedCommentsAction(id));
  });

export const addOfferToFavoriteAction = createAsyncThunk<OfferExtended, string, ApiActionType>(
  'offers/addOfferToFavorite', async (id, { dispatch, extra: api }) => {
    const { data } = await api.post<OfferExtended>(`${APIRoute.Favorite}/${id}/1`);
    dispatch(fetchFavoriteOffersAction());
    return data;
  });

export const removeOfferFromFavoriteAction = createAsyncThunk<OfferExtended, string, ApiActionType>(
  'offers/removeOfferFromFavorite', async (id, { dispatch, extra: api }) => {
    const { data } = await api.post<OfferExtended>(`${APIRoute.Favorite}/${id}/0`);
    dispatch(fetchFavoriteOffersAction());
    return data;
  });
