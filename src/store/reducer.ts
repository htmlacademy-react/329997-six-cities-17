import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortingState, changeSortingType } from './action';
import { getCurrentLocationOffers, sortOffers } from '../utils/utils';
import { Offer } from '../types/offer-type';
import { LOCATIONS, SortType, AuthorizationStatus, FetchStatus, BLANK_OFFER_EXTENDED } from '../const/const';
import { UserData } from '../types/user-data-type';
import { OfferExtended } from '../types/offer-extended-type';
import { OfferComment } from '../types/offer-comment-type';
import { checkAuthAction, fetchOfferExtendedAction, fetchOfferExtendedCommentsAction, fetchOffersAction, fetchOffersNearbyAction, loginAction, logoutAction } from './api-action';
import { toast } from 'react-toastify';


const initialState: {
  city: string;
  currentOffers: Offer[];
  currentSortingType: string;
  isSortingOpened: boolean;

  offers: Offer[];
  offersState: FetchStatus;

  currentOfferExtended: OfferExtended;
  currentOfferExtendedState: FetchStatus;

  currentOfferExtendedComments: OfferComment[];
  currentOfferExtendedCommentsState: FetchStatus;

  currentOffersNearby: Offer[];
  currentOffersNearbyState: FetchStatus;

  favoriteOffers: Offer[];
  favoriteOffersState: FetchStatus;

  authorizationStatus: AuthorizationStatus;

  user: UserData | null;
  userState: FetchStatus;
} =
{
  city: LOCATIONS[0],
  currentOffers: [],
  currentSortingType: SortType.POPULAR,
  isSortingOpened: false,

  offers: [],
  offersState: FetchStatus.Unknown,

  currentOfferExtended: BLANK_OFFER_EXTENDED,
  currentOfferExtendedState: FetchStatus.Unknown,

  currentOfferExtendedComments: [],
  currentOfferExtendedCommentsState: FetchStatus.Unknown,

  currentOffersNearby: [],
  currentOffersNearbyState: FetchStatus.Unknown,

  authorizationStatus: AuthorizationStatus.Unknown,

  favoriteOffers: [],
  favoriteOffersState: FetchStatus.Unknown,

  user: null,
  userState: FetchStatus.Unknown,
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
      state.offersState = FetchStatus.Loading;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offersState = FetchStatus.Loaded;
      state.offers = action.payload;
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.offersState = FetchStatus.Error;
      toast.error('Loading offers error');
    })

    .addCase(fetchOfferExtendedAction.pending, (state) => {
      state.currentOfferExtendedState = FetchStatus.Loading;
    })
    .addCase(fetchOfferExtendedAction.fulfilled, (state, action) => {
      state.currentOfferExtendedState = FetchStatus.Loaded;
      state.currentOfferExtended = action.payload;
    })
    .addCase(fetchOfferExtendedAction.rejected, (state) => {
      state.currentOfferExtendedState = FetchStatus.Error;
      toast.error('Loading offer error');
    })

    .addCase(fetchOfferExtendedCommentsAction.pending, (state) => {
      state.currentOfferExtendedCommentsState = FetchStatus.Loading;
    })
    .addCase(fetchOfferExtendedCommentsAction.fulfilled, (state, action) => {
      state.currentOfferExtendedCommentsState = FetchStatus.Loaded;
      state.currentOfferExtendedComments = action.payload;
    })
    .addCase(fetchOfferExtendedCommentsAction.rejected, (state) => {
      state.currentOfferExtendedCommentsState = FetchStatus.Error;
      toast.error('Loading offer comments error');
    })

    .addCase(fetchOffersNearbyAction.pending, (state) => {
      state.currentOffersNearbyState = FetchStatus.Loading;
    })
    .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
      state.currentOffersNearbyState = FetchStatus.Loaded;
      state.currentOffersNearby = action.payload;
    })
    .addCase(fetchOffersNearbyAction.rejected, (state) => {
      state.currentOffersNearbyState = FetchStatus.Error;
      toast.error('Loading nearby offers error');
    })

    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
      toast.error('Authification error');
    })

    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
    })
    .addCase(logoutAction.rejected, () => {
      toast.error('Logout error');
    })

    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
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

