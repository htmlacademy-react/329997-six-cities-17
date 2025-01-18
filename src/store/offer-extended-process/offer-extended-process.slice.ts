import { createSlice } from '@reduxjs/toolkit';
import { BLANK_OFFER_EXTENDED, FetchState, NameSpace, SubmitState } from '../../const/const';
import { toast } from 'react-toastify';
import { OfferExtended } from '../../types/offer-extended-type';
import { addOfferToFavoriteAction, fetchOfferExtendedAction, fetchOfferExtendedCommentsAction, removeOfferFromFavoriteAction, submitCommentAction } from '../api-action';
import { OfferComment } from '../../types/offer-comment-type';

const initialState: {
  currentOfferExtended: OfferExtended;
  currentOfferExtendedState: FetchState;
  currentOfferExtendedComments: OfferComment[];
  currentOfferExtendedCommentsState: FetchState;
  submittingState: SubmitState;
} =
{
  currentOfferExtended: BLANK_OFFER_EXTENDED,
  currentOfferExtendedState: FetchState.Unknown,
  currentOfferExtendedComments: [],
  currentOfferExtendedCommentsState: FetchState.Unknown,
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
      .addCase(submitCommentAction.pending, (state) => {
        state.submittingState = SubmitState.Submitting;
      })
      .addCase(submitCommentAction.fulfilled, (state, action) => {
        state.submittingState = SubmitState.Submited;
        state.currentOfferExtendedComments.push(action.payload);
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
