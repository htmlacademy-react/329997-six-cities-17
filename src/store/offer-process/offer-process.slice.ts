import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchState, LOCATIONS, NameSpace, SortType } from '../../const/const';
import { addOfferToFavoriteAction, fetchOffersAction, removeOfferFromFavoriteAction } from '../api-action';
import { toast } from 'react-toastify';
import { Offer } from '../../types/offer-type';
import { getCurrentLocationOffers, sortOffers, updateOfferFavoriteStatus } from '../../utils/utils';

const initialState: {
  city: string;
  isSortingOpened: boolean;
  currentSortingType: SortType;
  offers: Offer[];
  offersState: FetchState;
  currentOffers: Offer[];
} =
{
  city: LOCATIONS[0],
  isSortingOpened: false,
  currentSortingType: SortType.POPULAR,
  offers: [],
  offersState: FetchState.Unknown,
  currentOffers: [],
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
      state.isSortingOpened = false;
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
    },
    changeSortingState: (state, action: PayloadAction<boolean>) => {
      state.isSortingOpened = action.payload;
    },
    changeSortingType: (state, action: PayloadAction<SortType>) => {
      state.currentSortingType = action.payload;
      state.currentOffers = sortOffers(getCurrentLocationOffers(state.offers, state.city), action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersState = FetchState.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersState = FetchState.Loaded;
        state.offers = action.payload;
        state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersState = FetchState.Error;
        toast.error('Loading offers error');
      })
      .addCase(addOfferToFavoriteAction.fulfilled, (state, action) => {
        state.offers = updateOfferFavoriteStatus(state.offers, action.payload, true);
        state.currentOffers = getCurrentLocationOffers(state.offers, state.city);

      })
      .addCase(removeOfferFromFavoriteAction.fulfilled, (state, action) => {
        state.offers = updateOfferFavoriteStatus(state.offers, action.payload, false);
        state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
      });
  }
});

export const { changeCity, changeSortingState, changeSortingType } = offersProcess.actions;
