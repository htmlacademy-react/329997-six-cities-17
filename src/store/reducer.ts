import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSortingState, changeSortingType, requireAuthorization, setError, setLoadingStatus, setUserData, loadOfferExtended, loadOffersNearby } from './action';
import { getCurrentLocationOffers, sortOffers } from '../utils/utils';
import { Offer } from '../types/offer-type';
import { LOCATIONS, SortType } from '../const/const';
import { AuthorizationStatus } from '../const/const';
import { UserData } from '../types/user-data-type';
import { OfferExtended } from '../types/offer-extended-type';
import { OfferNearby } from '../types/offer-nearby-type';


const initialState: {
  city: string;
  offers: Offer[];
  currentOfferExtended: OfferExtended | null;
  currentOffersNearby: OfferNearby[] | null;
  favoriteOffers: Offer[];
  currentOffers: Offer[];
  currentSortingType: string;
  isSortingOpened: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string;
  isLoading: boolean;
  user: UserData | null;
} =
{
  city: LOCATIONS[0],
  offers: [],
  currentOfferExtended: null,
  currentOffersNearby: null,
  favoriteOffers: [],
  currentOffers: [],
  currentSortingType: SortType.POPULAR,
  isSortingOpened: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isLoading: false,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
      state.isSortingOpened = false;
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
    })
    .addCase(loadOfferExtended, (state, action) => {
      state.currentOfferExtended = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.currentOffersNearby = action.payload;
    })
    .addCase(changeSortingState, (state, action) => {
      const { sortingState } = action.payload;
      state.isSortingOpened = sortingState;
    })
    .addCase(changeSortingType, (state, action) => {
      state.currentSortingType = action.payload;
      state.currentOffers = sortOffers(getCurrentLocationOffers(state.offers, state.city), action.payload);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    });
});

export { reducer };

