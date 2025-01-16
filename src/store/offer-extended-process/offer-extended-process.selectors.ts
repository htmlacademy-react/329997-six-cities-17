import { FetchState, NameSpace, SubmitState } from '../../const/const';
import { OfferComment } from '../../types/offer-comment-type';
import { OfferExtended } from '../../types/offer-extended-type';
import { Offer } from '../../types/offer-type';
import { AppState } from '../../types/state-type';

export const getOfferExtended = (state: AppState): OfferExtended => state[NameSpace.OfferExtended].currentOfferExtended;
export const getOfferExtendedState = (state: AppState): FetchState => state[NameSpace.OfferExtended].currentOfferExtendedState;

export const getOfferExtendedComments = (state: AppState): OfferComment[] => state[NameSpace.OfferExtended].currentOfferExtendedComments;
export const getOfferExtendedCommentsState = (state: AppState): FetchState => state[NameSpace.OfferExtended].currentOfferExtendedCommentsState;

export const getOffersNearby = (state: AppState): Offer[] => state[NameSpace.OfferExtended].currentOffersNearby;
export const getOffersNearbyState = (state: AppState): FetchState => state[NameSpace.OfferExtended].currentOffersNearbyState;

export const getSubmittingState = (state: AppState): SubmitState => state[NameSpace.OfferExtended].submittingState;
