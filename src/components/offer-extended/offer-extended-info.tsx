import { OfferExtended } from '../../types/offer-extended-type';
import { getStarsRating, capitalizeFirstLetter } from '../../utils/utils';
import FavoriteButton from '../favorite-button/favorite-button';
import { FavoriteButtonType } from '../../const/const';
import { memo } from 'react';

type OfferExtendedInfoProps = {
  offer: OfferExtended;
}

function OfferExtendedInfo(props: OfferExtendedInfoProps): JSX.Element {
  const { offer } = props;
  const { id, isPremium, price, isFavorite, rating, title, type, maxAdults, bedrooms } = offer;
  const starsRating = getStarsRating(rating);

  return (
    <>
      {isPremium &&
        <div className="offer__mark">
          <span>Premium</span>
        </div>}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>
        <FavoriteButton isFavorite={isFavorite} favoriteButtonType={FavoriteButtonType.OFFER} id={id} />
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{ width: starsRating }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {capitalizeFirstLetter(type)}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
    </>
  );
}

export default memo(OfferExtendedInfo);
