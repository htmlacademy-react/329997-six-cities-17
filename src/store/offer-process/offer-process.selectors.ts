import { FetchState, NameSpace } from '../../const/const';
import { Offer } from '../../types/offer-type';
import { AppState } from '../../types/state-type';

export const getOffers = (state: AppState): Offer[] => state[NameSpace.Offers].offers;
export const getOffersState = (state: AppState): FetchState => state[NameSpace.Offers].offersState;
export const getCurrentOffers = (state: AppState): Offer[] => state[NameSpace.Offers].currentOffers;

export const getCurrentSortingState = (state: AppState): boolean => state[NameSpace.Offers].isSortingOpened;
export const getCurrentSortingType = (state: AppState): string => state[NameSpace.Offers].currentSortingType;

export const getOffersCityTitle = (state: AppState): string => state[NameSpace.Offers].city;

