import classNames from 'classnames';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute, OfferPageType } from '../../const';
import { getStarsRating, capitalizeFirstLetter } from '../../utils';
import { Offer } from '../../types/offer-type';
import { MouseEvent } from 'react';

type OfferItemProps = {
  offer: Offer;
  pageType: OfferPageType;
  onPlaceMouseEnter?: (evt: MouseEvent<HTMLElement>) => void;
  onPlaceMouseLeave?: () => void;
}

function OfferItem(props: OfferItemProps): JSX.Element {
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
            width={pageType === OfferPageType.FAVORITES ? 150 : 260 }
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

          <button className={classNames('place-card__bookmark-button', { 'place-card__bookmark-button--active': isFavorite }, 'button', 'type="button"')}>
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: starsRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>

  );
}

export default OfferItem;
