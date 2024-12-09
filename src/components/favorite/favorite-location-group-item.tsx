import { Offer } from '../../types/offer-type';
import OfferItem from '../offer/offer-item';
import { offerPageType } from '../../const';
import { useState } from 'react';

type FaviroteLocationGroupItemProps = {
  offers: Offer[];
  location: string;
};

function FaviroteLocationGroupItem(props: FaviroteLocationGroupItemProps): JSX.Element {
  const { offers, location } = props;

  const [, setSelectedPlace] = useState<Offer | null>(null);

  const selectedPlaceMouseEnterHandler = (offer: Offer) => setSelectedPlace(offer);
  const selectedPlaceMouseLeaveHandler = () => setSelectedPlace(null);

  return (
    <li className="favorites__locations-items" >
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((element) => (
          <OfferItem
            key={element.id}
            offer={element}
            pageType={offerPageType.FAVORITES}
            onPlaceMouseEnter={() => selectedPlaceMouseEnterHandler(element)}
            onPlaceMouseLeave={() => selectedPlaceMouseLeaveHandler}
          />))}
      </div>
    </li>
  );
}

export default FaviroteLocationGroupItem;
