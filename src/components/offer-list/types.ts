import { MouseEvent } from 'react';
import { OfferPageType } from '../../const/const';
import { Offer } from '../../types/offer-type';

export type OfferList = {
  offers?: Offer[];
  pageType: OfferPageType;
  onOfferMouseEnter?: (evt: MouseEvent<HTMLElement>) => void;
  onOfferMouseLeave?: () => void;
}
