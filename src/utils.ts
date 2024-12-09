import { Offer } from './types/offer-type';

const capitalizeFirstLetter = (inputString: string): string => inputString.charAt(0).toUpperCase() + inputString.slice(1);

const getStarsRating = (rating: number) => `${20 * rating}%`;

const checkCommentInRange = (min: number, max:number, value: string) => (value.length >= min) && (value.length <= max);

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
  return Array.from(favoritesOffersByLocation).map(([name, places]) => ({name, places}));
};

export { getStarsRating, getFavoriteOffers, capitalizeFirstLetter, checkCommentInRange };
