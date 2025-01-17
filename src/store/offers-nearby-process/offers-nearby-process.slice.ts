import { createSlice } from '@reduxjs/toolkit';
import { FetchState, NameSpace } from '../../const/const';
import { toast } from 'react-toastify';
import { addOfferToFavoriteAction, fetchOffersNearbyAction, removeOfferFromFavoriteAction } from '../api-action';
import { Offer } from '../../types/offer-type';
import { updateOfferFavoriteStatus } from '../../utils/utils';

const initialState: {
  currentOffersNearby: Offer[];
  currentOffersNearbyState: FetchState;
} =
{
  currentOffersNearby: [],
  currentOffersNearbyState: FetchState.Unknown,
};

export const offersNearbyProcess = createSlice({
  name: NameSpace.OffersNearby,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.currentOffersNearbyState = FetchState.Loading;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.currentOffersNearbyState = FetchState.Loaded;
        state.currentOffersNearby = action.payload;
      })
      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.currentOffersNearbyState = FetchState.Error;
        toast.error('Loading nearby offers error!');
      })
      .addCase(addOfferToFavoriteAction.fulfilled, (state, action) => {
        state.currentOffersNearby = updateOfferFavoriteStatus(state.currentOffersNearby, action.payload, true); //не понимаю почему не происходит перерендера? В общих офферах все работает
      })
      .addCase(removeOfferFromFavoriteAction.fulfilled, (state, action) => {
        state.currentOffersNearby = updateOfferFavoriteStatus(state.currentOffersNearby, action.payload, false); //не понимаю почему не происходит перерендера? В общих офферах все работает
      });
  }
});
