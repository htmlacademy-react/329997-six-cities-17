import { FetchState, NameSpace } from '../../const/const';
import { Offer } from '../../types/offer-type';
import { AppState } from '../../types/state-type';

export const getOffersNearby = (state: AppState): Offer[] => state[NameSpace.OfferExtendedNearby].currentOfferNearby;
export const getOffersNearbyState = (state: AppState): FetchState => state[NameSpace.OfferExtendedNearby].currentOfferNearbyState;
