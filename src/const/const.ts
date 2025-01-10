export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const RATING_OPTIONS = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly'
  },
  {
    value: 1,
    title: 'terribly'
  }
];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offers/:id',
  NotFound = '*',
}

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CommentOption {
  minLength = 50,
  maxLength = 300,
}

export enum OfferPageType {
  CITIES = 'cities',
  FAVORITES = 'favorites',
  NEAR_PLACES = 'near-places',
}

export enum SortType {
  POPULAR = 'Popular',
  PRICE_LOW_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED = 'Top rated first',
}

export const MAP_MARKER_DEFAULT = '../img/pin.svg';

export const MAP_MARKER_CURRENT = '../img/pin-active.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

export const REQUEST_TIMEOUT = 5000;

export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';

export const NEAR_PACES_COUNT = 3;
