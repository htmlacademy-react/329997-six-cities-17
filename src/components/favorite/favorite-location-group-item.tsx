import { Offer } from '../../types/offer-type';
import OfferItem from '../offer/offer-item';
import { OfferPageType } from '../../const/const';

type FaviroteLocationGroupItemProps = {
  offers: Offer[];
  location: string;
};

function FaviroteLocationGroupItem(props: FaviroteLocationGroupItemProps): JSX.Element {
  const { offers, location } = props;

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
            pageType={OfferPageType.FAVORITES}
          />))}
      </div>
    </li>
  );
}

export default FaviroteLocationGroupItem;
