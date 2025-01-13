import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortingState, changeSortingType } from './action';
import { getCurrentLocationOffers, sortOffers } from '../utils/utils';
import { Offer } from '../types/offer-type';
import { LOCATIONS, SortType, AuthorizationState, FetchState, BLANK_OFFER_EXTENDED, SubmitState, SignInState } from '../const/const';
import { UserData } from '../types/user-data-type';
import { OfferExtended } from '../types/offer-extended-type';
import { OfferComment } from '../types/offer-comment-type';
import { checkAuthAction, fetchOfferExtendedAction, fetchOfferExtendedCommentsAction, fetchOffersAction, fetchOffersNearbyAction, loginAction, logoutAction, submitCommentAction } from './api-action';
import { toast } from 'react-toastify';


const initialState: {
  city: string;
  currentOffers: Offer[];
  currentSortingType: string;
  isSortingOpened: boolean;

  offers: Offer[];
  offersState: FetchState;

  currentOfferExtended: OfferExtended;
  currentOfferExtendedState: FetchState;

  currentOfferExtendedComments: OfferComment[];
  currentOfferExtendedCommentsState: FetchState;

  currentOffersNearby: Offer[];
  currentOffersNearbyState: FetchState;

  favoriteOffers: Offer[];
  favoriteOffersState: FetchState;

  authorizationState: AuthorizationState;

  submittingState: SubmitState;

  signingInState: SignInState;

  user: UserData | null;
  userState: FetchState;
} =
{
  city: LOCATIONS[0],
  currentOffers: [],
  currentSortingType: SortType.POPULAR,
  isSortingOpened: false,

  offers: [],
  offersState: FetchState.Unknown,

  currentOfferExtended: BLANK_OFFER_EXTENDED,
  currentOfferExtendedState: FetchState.Unknown,

  currentOfferExtendedComments: [],
  currentOfferExtendedCommentsState: FetchState.Unknown,

  currentOffersNearby: [],
  currentOffersNearbyState: FetchState.Unknown,

  authorizationState: AuthorizationState.Unknown,

  submittingState: SubmitState.Unknown,

  signingInState: SignInState.Unknown,

  favoriteOffers: [],
  favoriteOffersState: FetchState.Unknown,

  user: null,
  userState: FetchState.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
      state.isSortingOpened = false;
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
    })

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
      toast.error('Loading offer comments error');
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
      toast.error('Loading nearby offers error');
    })

    .addCase(loginAction.pending, (state) => {
      state.signingInState = SignInState.SigningIn;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationState = AuthorizationState.Auth;
      state.signingInState = SignInState.SignedIn;
      state.user = action.payload;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationState = AuthorizationState.NoAuth;
      state.user = null;
      toast.error('Authification error');
    })

    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationState = AuthorizationState.NoAuth;
      state.user = null;
    })
    .addCase(logoutAction.rejected, () => {
      toast.error('Logout error');
    })

    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authorizationState = AuthorizationState.Auth;
      state.user = action.payload;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authorizationState = AuthorizationState.NoAuth;
      state.user = null;
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

    .addCase(changeSortingState, (state, action) => {
      const { sortingState } = action.payload;
      state.isSortingOpened = sortingState;
    })
    .addCase(changeSortingType, (state, action) => {
      state.currentSortingType = action.payload;
      state.currentOffers = sortOffers(getCurrentLocationOffers(state.offers, state.city), action.payload);
    });
});

export { reducer };

