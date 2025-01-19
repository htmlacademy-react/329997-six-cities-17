import { createSlice } from '@reduxjs/toolkit';
import { FetchState, NameSpace } from '../../const/const';
import { toast } from 'react-toastify';
import { addOfferToFavoriteAction, fetchOfferExtendedNearbyAction, removeOfferFromFavoriteAction } from '../api-action';
import { Offer } from '../../types/offer-type';
import { updateOfferFavoriteStatus } from '../../utils/utils';

const initialState: {
  currentOfferNearby: Offer[];
  currentOfferNearbyState: FetchState;
} =
{
  currentOfferNearby: [],
  currentOfferNearbyState: FetchState.Unknown,
};

export const offerExtendedNearbyProcess = createSlice({
  name: NameSpace.OfferExtendedNearby,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferExtendedNearbyAction.pending, (state) => {
        state.currentOfferNearbyState = FetchState.Loading;
      })
      .addCase(fetchOfferExtendedNearbyAction.fulfilled, (state, action) => {
        state.currentOfferNearbyState = FetchState.Loaded;
        state.currentOfferNearby = action.payload;
      })
      .addCase(fetchOfferExtendedNearbyAction.rejected, (state) => {
        state.currentOfferNearbyState = FetchState.Error;
        toast.error('Loading nearby offers error!');
      })
      .addCase(addOfferToFavoriteAction.fulfilled, (state, action) => {
        state.currentOfferNearby = updateOfferFavoriteStatus(state.currentOfferNearby, action.payload, true);
      })
      .addCase(removeOfferFromFavoriteAction.fulfilled, (state, action) => {
        state.currentOfferNearby = updateOfferFavoriteStatus(state.currentOfferNearby, action.payload, false);
      });
  }
});
