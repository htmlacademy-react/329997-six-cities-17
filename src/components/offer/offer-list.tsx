import OfferItem from './offer-item';
import { Offer } from '../../types/offer-type';
import { OfferPageType } from '../../const';
import { MouseEvent } from 'react';
import classNames from 'classnames';

type OfferListProps = {
  offers: Offer[];
  pageType: OfferPageType;
  onOfferMouseEnter?: (evt: MouseEvent<HTMLElement>) => void;
  onOfferMouseLeave?: () => void;
}

function OfferList(props: OfferListProps): JSX.Element {
  const { offers, pageType, onOfferMouseEnter, onOfferMouseLeave } = props;


  return (
    <div className={classNames(
      { 'cities__places-list': pageType === OfferPageType.CITIES },
      { 'near-places__list': pageType === OfferPageType.NEAR_PLACES },
      { 'favorites__list': pageType === OfferPageType.FAVORITES },
      'places__list',
      { 'tabs__content': pageType === OfferPageType.CITIES })}
    >
      {offers.map((element) => (
        <OfferItem
          key={element.id}
          offer={element}
          pageType={pageType}
          onPlaceMouseEnter={onOfferMouseEnter}
          onPlaceMouseLeave={onOfferMouseLeave}
        />
      ))}
    </div>
  );
}

export default OfferList;
