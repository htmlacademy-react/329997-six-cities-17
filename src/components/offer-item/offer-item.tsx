import { memo } from 'react';
import classNames from 'classnames';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute, OfferPageType, FavoriteButtonType } from '../../const/const';
import { getStarsRating, capitalizeFirstLetter } from '../../utils/utils';
import FavoriteButton from '../favorite-button/favorite-button';
import type { OfferItem } from './types';

function OfferItem(props: OfferItem): JSX.Element {
  const { offer, pageType, onPlaceMouseEnter, onPlaceMouseLeave } = props;
  const { id, isPremium, previewImage, price, isFavorite, rating, title, type } = offer;
  const starsRating = getStarsRating(rating);

  return (
    <article
      className={`${pageType}__card place-card`}
      data-id={offer.id}
      onMouseEnter={onPlaceMouseEnter}
      onMouseLeave={onPlaceMouseLeave}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${pageType}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, { id })}>
          <img
            className="place-card__image"
            src={previewImage}
            width={pageType === OfferPageType.FAVORITES ? 150 : 260}
            height={pageType === OfferPageType.FAVORITES ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={classNames('place-card__info', { 'favorites__card-info': pageType === OfferPageType.FAVORITES })}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton isFavorite={isFavorite} favoriteButtonType={FavoriteButtonType.PLACE_CARD} id={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: starsRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id })}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>

  );
}

export default memo(OfferItem);
