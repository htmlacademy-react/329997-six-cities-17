import OfferItem from './offer-item';
import { Offer } from '../../types/offer-type';
import { OfferPageType } from '../../const';
import { MouseEvent } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../hooks';
import { SORT_TYPE } from '../../const';
import { sortByPriceHighToLow, sortByPriceLowToHigh, sortByRatingHighToLow } from '../../utils';

type OfferListProps = {
  offers: Offer[];
  pageType: OfferPageType;
  onOfferMouseEnter: (offer: Offer) => void;
  onOfferMouseLeave: () => void;
}

function OfferList(props: OfferListProps): JSX.Element {
  const { offers, pageType, onOfferMouseEnter, onOfferMouseLeave } = props;

  const currentSorting = useAppSelector((state) => state.currentSortingType);

  let sortedOffers: Offer[] = [];

  switch (currentSorting) {
    case SORT_TYPE.PRICE_LOW_HIGH:
      sortedOffers = sortByPriceLowToHigh(offers);
      break;
    case SORT_TYPE.PRICE_HIGH_TO_LOW:
      sortedOffers = sortByPriceHighToLow(offers);
      break;
    case SORT_TYPE.TOP_RATED:
      sortedOffers = sortByRatingHighToLow(offers);
      break;
    default:
      sortedOffers = offers;
      break;
  }

  const handleOfferItemMouseEnter = (evt: MouseEvent<HTMLElement>) => {
    const currentOffer = offers.find((element) => element.id === evt.currentTarget.dataset.id);
    if (!currentOffer) {
      return;
    }
    onOfferMouseEnter(currentOffer);
  };

  const handleOfferItemMouseLeave = () => {
    onOfferMouseLeave();
  };

  return (
    <div className={classNames(
      { 'cities__places-list': pageType === OfferPageType.CITIES },
      { 'near-places__list': pageType === OfferPageType.NEAR_PLACES },
      { 'favorites__list': pageType === OfferPageType.FAVORITES },
      'places__list',
      { 'tabs__content': pageType === OfferPageType.CITIES })}
    >
      {sortedOffers.map((element) => (
        <OfferItem
          key={element.id}
          offer={element}
          pageType={pageType}
          onPlaceMouseEnter={handleOfferItemMouseEnter}
          onPlaceMouseLeave={handleOfferItemMouseLeave}
        />
      ))}
    </div>
  );
}

export default OfferList;
