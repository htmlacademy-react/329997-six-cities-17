import { createSlice } from '@reduxjs/toolkit';
import { FetchState, NameSpace } from '../../const/const';
import { fetchFavoriteOffersAction } from '../api-action';
import { Offer } from '../../types/offer-type';

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
      });
  }
});
