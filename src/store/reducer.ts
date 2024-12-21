import { createReducer } from '@reduxjs/toolkit';
import { mockOffers } from '../mocks/offers';
import { changeCity, loadOffers, changeSortingState, changeSortingType } from './action';
import { getCurrentLocationOffers } from '../utils';
import { Offer } from '../types/offer-type';


const initialState: {
  city: string;
  offers: Offer[];
  currentOffers: Offer[];
  currentSortingType: string;
  isSortingOpened: boolean;
} =
{
  city: 'Paris',
  offers: mockOffers,
  currentOffers: getCurrentLocationOffers(mockOffers, 'Paris'),
  currentSortingType: 'Popular',
  isSortingOpened: false,
};

//для загрузки офферов для Парижа при старте приложения я так понимаю нужно будет дернуть хранилище при инициализации? Или текущий вариант использовать можно

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(loadOffers, (state) => {
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
    })
    .addCase(changeSortingState, (state, action) => {
      const { sortingState } = action.payload;
      state.isSortingOpened = sortingState;
    })
    .addCase(changeSortingType, (state, action) => {
      const { sortingType } = action.payload;
      state.currentSortingType = sortingType;
    });
});

export { reducer };
