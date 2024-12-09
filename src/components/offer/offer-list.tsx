import OfferItem from './offer-item';
import { Offer } from '../../types/offer-type';
import { useState } from 'react';
import { offerPageType } from '../../const';

type OfferListProps = {
  offers: Offer[];
}

function OfferList(props: OfferListProps): JSX.Element {
  const { offers } = props;

  const [, setSelectedPlace] = useState<Offer | null>(null);

  const selectedPlaceMouseEnterHandler = (offer: Offer) => setSelectedPlace(offer);
  const selectedPlaceMouseLeaveHandler = () => setSelectedPlace(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((element) => (
        <OfferItem
          key={element.id}
          offer={element}
          pageType={offerPageType.CITIES}
          onPlaceMouseEnter={() => selectedPlaceMouseEnterHandler(element)}
          onPlaceMouseLeave={() => selectedPlaceMouseLeaveHandler}
        />
      ))}
    </div>
  );
}

export default OfferList;
