import { AppState } from '../types/state-type';

export const getCurrentCityTitle = (state: AppState) => state.city;
export const getCurrentOffers = (state: AppState) => state.currentOffers;
export const getCurrentSortingType = (state: AppState) => state.currentSortingType;
export const getCurrentSortingState = (state: AppState) => state.isSortingOpened;

export const getOffers = (state: AppState) => state.offers;
export const getOffersState = (state: AppState) => state.offersState;

export const getOfferExtended = (state: AppState) => state.currentOfferExtended;
export const getOfferExtendedState = (state: AppState) => state.currentOfferExtendedState;

export const getOfferExtendedComments = (state: AppState) => state.currentOfferExtendedComments;
export const getOfferExtendedCommentsState = (state: AppState) => state.currentOfferExtendedCommentsState;

export const getOffersNearby = (state: AppState) => state.currentOffersNearby;
export const getOffersNearbyState = (state: AppState) => state.currentOffersNearbyState;

export const getOffersFavorite = (state: AppState) => state.favoriteOffers;
export const getOffersFavoriteState = (state: AppState) => state.favoriteOffersState;

export const getOfferFavoriteStatusState = (state: AppState) => state.favoriteOfferStatusState;

export const getOffersFavoriteStatus = (state: AppState) => state.favoriteOffers;
export const getOffersFavoriteStatusState = (state: AppState) => state.favoriteOffersState;

export const getAuthorizationState = (state: AppState) => state.authorizationState;
export const getSubmittingState = (state: AppState) => state.submittingState;
export const getSigningInState = (state: AppState) => state.signingInState;

export const getUserData = (state: AppState) => state.user;
export const getUserDataState = (state: AppState) => state.userState;
