import { createSlice } from '@reduxjs/toolkit';
import { FetchState, NameSpace } from '../../const/const';
import { addOfferToFavoriteAction, fetchFavoriteOffersAction, removeOfferFromFavoriteAction } from '../api-action';
import { Offer } from '../../types/offer-type';
import { toast } from 'react-toastify';

const initialState: {
  favoriteOffers: Offer[];
  favoriteOffersState: FetchState;
  favoriteOfferStatusState: FetchState;
} =
{
  favoriteOffers: [],
  favoriteOffersState: FetchState.Unknown,
  favoriteOfferStatusState: FetchState.Unknown,
};

export const favoriteOffersProcess = createSlice({
  name: NameSpace.FavoriteOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.favoriteOffersState = FetchState.Loading;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffersState = FetchState.Loaded;
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.favoriteOffersState = FetchState.Error;
      })
      .addCase(addOfferToFavoriteAction.fulfilled, (state, action) => {
        state.favoriteOffers.push(action.payload);
      })
      .addCase(addOfferToFavoriteAction.rejected, () => {
        toast.error('Add to favorite error!');
      })
      .addCase(removeOfferFromFavoriteAction.fulfilled, (state, action) => {
        const favoriteOfferId = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);
        state.favoriteOffers.splice(favoriteOfferId, 1);
      })
      .addCase(removeOfferFromFavoriteAction.rejected, () => {
        toast.error('Remove from favorite error!');
      });
  }
});
