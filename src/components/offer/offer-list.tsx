import OfferItem from './offer-item';
import { Offer } from '../../types/offer-type';
import { offerPageType } from '../../const';
import { MouseEvent } from 'react';

type OfferListProps = {
  offers: Offer[];
  onOfferMouseEnter: (offer: Offer) => void;
  onOfferMouseLeave: () => void;
}

function OfferList(props: OfferListProps): JSX.Element {
  const { offers, onOfferMouseEnter, onOfferMouseLeave } = props;

  const handleOfferItemMouseEnter = (evt: MouseEvent<HTMLLIElement>) => {
    const currentOffer = offers.find((element) => element.id === evt.currentTarget.dataset.id);
    if (currentOffer === undefined) {
      return;
    }
    onOfferMouseEnter(currentOffer);
  };

  const handleOfferItemMouseLeave = () => {
    onOfferMouseLeave();
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((element) => (
        <OfferItem
          key={element.id}
          offer={element}
          pageType={offerPageType.CITIES}
          onPlaceMouseEnter={handleOfferItemMouseEnter}
          onPlaceMouseLeave={handleOfferItemMouseLeave}
        />
      ))}
    </div>
  );
}

export default OfferList;
