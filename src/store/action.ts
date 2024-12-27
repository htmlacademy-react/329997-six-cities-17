import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../const/const';
import { Offer } from '../types/offer-type';
import { AuthorizationStatus } from '../const/const';

export const changeCity = createAction<{ city: string }>('city/changeCity');
export const loadOffers = createAction<Offer[]>('offers/loadOffers');
export const changeSortingState = createAction<{ sortingState: boolean }>('offers/setSortingState');
export const changeSortingType = createAction<SortType>('offers/setSortingType');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('offers/setError');
