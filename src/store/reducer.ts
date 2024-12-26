import { createReducer } from '@reduxjs/toolkit';
import { mockOffers } from '../mocks/offers';
import { changeCity, loadOffers, changeSortingState, changeSortingType } from './action';
import { getCurrentLocationOffers, sortOffers } from '../utils/utils';
import { Offer } from '../types/offer-type';
import { LOCATIONS, SortType } from '../const/const';


const initialState: {
  city: string;
  offers: Offer[];
  currentOffers: Offer[];
  currentSortingType: string;
  isSortingOpened: boolean;
} =
{
  city: LOCATIONS[0],
  offers: mockOffers,
  currentOffers: getCurrentLocationOffers(mockOffers, LOCATIONS[0]),
  currentSortingType: SortType.POPULAR,
  isSortingOpened: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
      state.isSortingOpened = false;
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
      state.currentOffers = sortOffers(getCurrentLocationOffers(state.offers, state.city), sortingType);
    });
});

export { reducer };

