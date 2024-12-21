import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<{ city: string }>('city/changeCity');
export const loadOffers = createAction('offers/loadOffers');
export const changeSortingState = createAction<{ sortingState: boolean }>('offers/setSortingState');
export const changeSortingType = createAction<{ sortingType: string }>('offers/setSortingType');
