import { createSlice } from '@reduxjs/toolkit';
import { BLANK_OFFER_EXTENDED, FetchState, NameSpace, SubmitState } from '../../const/const';
import { toast } from 'react-toastify';
import { OfferExtended } from '../../types/offer-extended-type';
import { addOfferToFavoriteAction, fetchOfferExtendedAction, fetchOfferExtendedCommentsAction, fetchOffersNearbyAction, removeOfferFromFavoriteAction, submitCommentAction } from '../api-action';
import { OfferComment } from '../../types/offer-comment-type';
import { Offer } from '../../types/offer-type';

const initialState: {
  currentOfferExtended: OfferExtended;
  currentOfferExtendedState: FetchState;
  currentOfferExtendedComments: OfferComment[];
  currentOfferExtendedCommentsState: FetchState;
  currentOffersNearby: Offer[];
  currentOffersNearbyState: FetchState;
  submittingState: SubmitState;
} =
{
  currentOfferExtended: BLANK_OFFER_EXTENDED,
  currentOfferExtendedState: FetchState.Unknown,
  currentOfferExtendedComments: [],
  currentOfferExtendedCommentsState: FetchState.Unknown,
  currentOffersNearby: [],
  currentOffersNearbyState: FetchState.Unknown,
  submittingState: SubmitState.Unknown,
};

export const offerExtendedProcess = createSlice({
  name: NameSpace.OfferExtended,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferExtendedAction.pending, (state) => {
        state.currentOfferExtendedState = FetchState.Loading;
      })
      .addCase(fetchOfferExtendedAction.fulfilled, (state, action) => {
        state.currentOfferExtendedState = FetchState.Loaded;
        state.currentOfferExtended = action.payload;
      })
      .addCase(fetchOfferExtendedAction.rejected, (state) => {
        state.currentOfferExtendedState = FetchState.Error;
        toast.error('Loading offer error');
      })
      .addCase(fetchOfferExtendedCommentsAction.pending, (state) => {
        state.currentOfferExtendedCommentsState = FetchState.Loading;
      })
      .addCase(fetchOfferExtendedCommentsAction.fulfilled, (state, action) => {
        state.currentOfferExtendedCommentsState = FetchState.Loaded;
        state.currentOfferExtendedComments = action.payload;
      })
      .addCase(fetchOfferExtendedCommentsAction.rejected, (state) => {
        state.currentOfferExtendedCommentsState = FetchState.Error;
        toast.error('Loading offer comments error!');
      })
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
      .addCase(submitCommentAction.pending, (state) => {
        state.submittingState = SubmitState.Submitting;
      })
      .addCase(submitCommentAction.fulfilled, (state) => {
        state.submittingState = SubmitState.Submited;
      })
      .addCase(submitCommentAction.rejected, (state) => {
        state.submittingState = SubmitState.Error;
        toast.error('Submit error!');
      })
      .addCase(addOfferToFavoriteAction.fulfilled, (state) => {
        state.currentOfferExtended.isFavorite = true;
      })
      .addCase(removeOfferFromFavoriteAction.fulfilled, (state) => {
        state.currentOfferExtended.isFavorite = false;
      });
  }
});
