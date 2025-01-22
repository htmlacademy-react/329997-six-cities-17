import { MouseEvent } from 'react';
import { OfferPageType } from '../../const/const';
import { Offer } from '../../types/offer-type';

export type OfferItem = {
  offer: Offer;
  pageType: OfferPageType;
  onPlaceMouseEnter?: (evt: MouseEvent<HTMLElement>) => void;
  onPlaceMouseLeave?: () => void;
}
