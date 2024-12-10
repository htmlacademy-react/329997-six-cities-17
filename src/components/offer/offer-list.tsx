import OfferItem from './offer-item';
import { Offer } from '../../types/offer-type';
import { useState } from 'react';
import { offerPageType } from '../../const';
import { MouseEvent } from 'react';

type OfferListProps = {
  offers: Offer[];
  onOfferHover: (offer: Offer) => void;
}

function OfferList(props: OfferListProps): JSX.Element {
  const { offers, onOfferHover } = props;

  const [selectedPlace, setSelectedPlace] = useState<Offer | null>(null);

  const handleOfferHover = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    onOfferHover(evt.currentTarget.id);
  };


  const selectedPlaceMouseLeaveHandler = () => setSelectedPlace(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((element) => (
        <OfferItem
          key={element.id}
          offer={element}
          pageType={offerPageType.CITIES}
          onPlaceMouseEnter={handleOfferHover}
          onPlaceMouseLeave={() => selectedPlaceMouseLeaveHandler}
        />
      ))}
    </div>
  );
}

export default OfferList;
