import { SortType } from '../const/const';
import { OfferComment } from '../types/offer-comment-type';
import { Offer } from '../types/offer-type';
import dayjs from 'dayjs';

const capitalizeFirstLetter = (inputString: string): string => inputString.charAt(0).toUpperCase() + inputString.slice(1);

const getStarsRating = (rating: number) => `${20 * Math.round(rating)}%`;

const checkCommentInRange = (min: number, max: number, value: string) => (value.length >= min) && (value.length <= max);

const convertDateToProperty = (dateString: string) => dayjs(dateString).format('YYYY-MM-DD');

const convertDateToHumanized = (dateString: string) => dayjs(dateString).format('MMMM YYYY');

const getFavoriteOffersByLocation = (offers: Offer[]) => {
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

const getCurrentLocationOffers = (offers: Offer[], location: string) => offers.filter((offer) => offer.city.name === location);

const getPriceCompareFunctionLowToHigh = (parameterA: Offer, parameterB: Offer) => parameterA.price > parameterB.price ? 1 : -1;

const getPriceCompareFunctionHighToLow = (parameterA: Offer, parameterB: Offer) => parameterA.price > parameterB.price ? -1 : 1;

const getRatingCompareFunctionHighToLow = (parameterA: Offer, parameterB: Offer) => parameterA.rating > parameterB.rating ? -1 : 1;

const getDateCompareFunctionNewToOld = (parameterA: OfferComment, parameterB: OfferComment) => parameterA.date > parameterB.date ? -1 : 1;

const sortOffers = (offers: Offer[], sortingType: SortType): Offer[] => {
  switch (sortingType) {
    case SortType.POPULAR:
      return offers;
    case SortType.PRICE_LOW_HIGH:
      return offers.toSorted(getPriceCompareFunctionLowToHigh);
    case SortType.PRICE_HIGH_TO_LOW:
      return offers.toSorted(getPriceCompareFunctionHighToLow);
    case SortType.TOP_RATED:
      return offers.toSorted(getRatingCompareFunctionHighToLow);

    default:
      return offers;
  }
};

const sortComments = (commens: OfferComment[]) => commens.toSorted(getDateCompareFunctionNewToOld);

const getRandomElement = <T>(elements: T[]) => elements[Math.floor(Math.random() * elements.length)];

const updateOfferFavoriteStatus = (offers: Offer[], response: Offer, isFavorite: boolean) => offers.map((offer) => offer.id === response.id ? { ...offer, isFavorite } : offer);

export { getStarsRating, getFavoriteOffersByLocation, capitalizeFirstLetter, checkCommentInRange, convertDateToProperty, convertDateToHumanized, getCurrentLocationOffers, sortOffers, sortComments, getRandomElement, updateOfferFavoriteStatus };
