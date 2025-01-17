import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/const';
import { authProcess } from './auth-process/auth-process.slice';
import { offersProcess } from './offer-process/offer-process.slice';
import { offerExtendedProcess } from './offer-extended-process/offer-extended-process.slice';
import { favoriteOffersProcess } from './favorite-offers-process/favorite-offers-process.slice';
import { offersNearbyProcess } from './offers-nearby-process/offers-nearby-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Auth]: authProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.OfferExtended]: offerExtendedProcess.reducer,
  [NameSpace.FavoriteOffers]: favoriteOffersProcess.reducer,
  [NameSpace.OffersNearby]: offersNearbyProcess.reducer,
});
