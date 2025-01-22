import { OfferPageType } from '../../const/const';
import { City } from '../../types/city-type';
import { OfferExtended } from '../../types/offer-extended-type';
import { Offer } from '../../types/offer-type';

export type Map = {
  city: City;
  offers?: Offer[];
  selectedOffer?: Offer | null;
  mapType?: OfferPageType;
  offerExtended?: OfferExtended;
};
