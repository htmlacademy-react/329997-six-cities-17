import { Offer } from './offer-type';

export type City = Pick<Offer['city'], 'name' | 'location'>
