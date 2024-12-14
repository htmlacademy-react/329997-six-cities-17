import OfferItem from './offer-item';
import { Offer } from '../../types/offer-type';
import { offerPageType } from '../../const';
import { MouseEvent } from 'react';
import classNames from 'classnames';

type OfferListProps = {
  offers: Offer[];
  pageType: offerPageType;
  onOfferMouseEnter: (offer: Offer) => void;
  onOfferMouseLeave: () => void;
}

function OfferList(props: OfferListProps): JSX.Element {
  const { offers, pageType, onOfferMouseEnter, onOfferMouseLeave } = props;

  const handleOfferItemMouseEnter = (evt: MouseEvent<HTMLLIElement>) => {
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
      { 'cities__places-list': pageType === offerPageType.CITIES },
      { 'near-places__list': pageType === offerPageType.NEAR_PLACES },
      { 'favorites__list': pageType === offerPageType.FAVORITES },
      'places__list',
      { 'tabs__content': pageType === offerPageType.CITIES })}
    >
      {offers.map((element) => (
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
