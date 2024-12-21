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

const getPriceCompareFunctionLowToHigh = (parameterA: Offer, parameterB: Offer) => {
  if (parameterA.price > parameterB.price) {
    return 1;
  } else if (parameterB.price > parameterA.price) {
    return -1;
  } else {
    return 0;
  }
};

const getPriceCompareFunctionHighToLow = (parameterA: Offer, parameterB: Offer) => {
  if (parameterA.price > parameterB.price) {
    return -1;
  } else if (parameterB.price > parameterA.price) {
    return 1;
  } else {
    return 0;
  }
};

const getRatingCompareFunctionHighToLow = (parameterA: Offer, parameterB: Offer) => {
  if (parameterA.rating > parameterB.rating) {
    return -1;
  } else if (parameterB.rating > parameterA.rating) {
    return 1;
  } else {
    return 0;
  }
};

const sortByPriceLowToHigh = (offers: Offer[]) => [...offers].sort(getPriceCompareFunctionLowToHigh);

const sortByPriceHighToLow = (offers: Offer[]) => [...offers].sort(getPriceCompareFunctionHighToLow);

const sortByRatingHighToLow = (offers: Offer[]) => [...offers].sort(getRatingCompareFunctionHighToLow);

export { getStarsRating, getFavoriteOffers, capitalizeFirstLetter, checkCommentInRange, getOffersLocations, convertDateToProperty, convertDateToHumanized, getCurrentLocationOffers, sortByPriceHighToLow, sortByPriceLowToHigh, sortByRatingHighToLow };
