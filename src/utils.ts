import { Offer } from './types/offer-type';


const getStarsRating = (rating: number) => `${20 * rating}%`;

const getFavoriteOffers = (offers: Offer[], locations: string[]) => {
  const favoriteOffers = offers.filter((element) => element.isFavorite);
const map = new Map();
const favoriteOffersWithLocations = favoriteOffers.map((element) => element.city.name )
  console.log(favoriteOffers);
}

export { getStarsRating, getFavoriteOffers };
