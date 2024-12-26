import { SortType } from './const';
import { CityLocation } from './types/city_types/city-location-type';
import { City } from './types/city_types/city-type';
import { Offer } from './types/offer-type';
import dayjs from 'dayjs';

const capitalizeFirstLetter = (inputString: string): string => inputString.charAt(0).toUpperCase() + inputString.slice(1);

const getStarsRating = (rating: number) => `${20 * rating}%`;

const checkCommentInRange = (min: number, max: number, value: string) => (value.length >= min) && (value.length <= max);

const convertDateToProperty = (dateString: string) => dayjs(dateString).format('YYYY-MM-DD');

const convertDateToHumanized = (dateString: string) => dayjs(dateString).format('MMMM D');

const getFavoriteOffers = (offers: Offer[]) => {
  const favoriteOffers = offers.filter((element) => element.isFavorite);

  if (favoriteOffers.length === 0) {
    return [];
  }
  const favoritesOffersByLocation = new Map<string, Offer[]>();

  favoriteOffers.forEach((element) => {

    const offersLocation = element.city.name;

    favoritesOffersByLocation.set(offersLocation, []);

    const locationOffers = favoriteOffers.filter((locationOffer) => locationOffer.city.name === offersLocation);

    locationOffers.forEach((offer) => {
      favoritesOffersByLocation.get(offersLocation)?.push(offer);
    });
  }
  );
  return Array.from(favoritesOffersByLocation).map(([name, places]) => ({ name, places }));
};

const getOffersLocations = (offers: Offer[]) => {
  const cities = new Map<string, CityLocation>();
  offers.forEach((offer) => {
    cities.set(offer.city.name, offer.city.location);
  });
  return Array.from(cities).map(([name, location]): City => ({ name, location }));
};

const getCurrentLocationOffers = (offers: Offer[], location: string) => offers.filter((offer) => offer.city.name === location);

const getPriceCompareFunctionLowToHigh = (parameterA: Offer, parameterB: Offer) => parameterA.price > parameterB.price ? 1 : -1;

const getPriceCompareFunctionHighToLow = (parameterA: Offer, parameterB: Offer) => parameterA.price > parameterB.price ? -1 : 1;

const getRatingCompareFunctionHighToLow = (parameterA: Offer, parameterB: Offer) => parameterA.rating > parameterB.rating ? -1 : 1;

const sortOffers = (offers: Offer[], sortingType: SortType): Offer[] => {
  switch (sortingType) {
    case SortType.POPULAR:
      return offers;
    case SortType.PRICE_LOW_HIGH:
      return [...offers].sort(getPriceCompareFunctionLowToHigh);
    case SortType.PRICE_HIGH_TO_LOW:
      return [...offers].sort(getPriceCompareFunctionHighToLow);
    case SortType.TOP_RATED:
      return [...offers].sort(getRatingCompareFunctionHighToLow);

    default:
      return offers;
  }
};

export { getStarsRating, getFavoriteOffers, capitalizeFirstLetter, checkCommentInRange, getOffersLocations, convertDateToProperty, convertDateToHumanized, getCurrentLocationOffers, sortOffers };
