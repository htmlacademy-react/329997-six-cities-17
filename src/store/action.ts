import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../const/const';
import { Offer } from '../types/offer-type';
import { AuthorizationStatus } from '../const/const';

export const changeCity = createAction<{ city: string }>('city/changeCity');
export const loadOffers = createAction<Offer[]>('common/loadOffers');
export const changeSortingState = createAction<{ sortingState: boolean }>('common/setSortingState');
export const changeSortingType = createAction<SortType>('common/setSortingType');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('common/setError');
export const setLoadingStatus = createAction<boolean>('common/setLoadingStatus');
