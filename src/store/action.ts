import { createAction } from '@reduxjs/toolkit';
import { AppRoute, SortType } from '../const/const';

export const changeCity = createAction<{ city: string }>('offers/changeCity');
export const changeSortingState = createAction<{ sortingState: boolean }>('offers/setSortingState');
export const changeSortingType = createAction<SortType>('offers/setSortingType');
export const redirectToRoute = createAction<AppRoute>('common/redirectToRoute');

