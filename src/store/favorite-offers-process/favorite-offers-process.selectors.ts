import { FetchState, NameSpace } from '../../const/const';
import { Offer } from '../../types/offer-type';
import { AppState } from '../../types/state-type';

export const getFavoriteOffers = (state: AppState): Offer[] => state[NameSpace.FavoriteOffers].favoriteOffers;
export const getFavoriteOffersState = (state: AppState): FetchState => state[NameSpace.FavoriteOffers].favoriteOffersState;
export const getFavoriteOfferStatusState = (state: AppState): FetchState => state[NameSpace.FavoriteOffers].favoriteOfferStatusState;
