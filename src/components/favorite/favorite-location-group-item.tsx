import { Offer } from '../../types/offer-type';
import FaviroteItem from './favorite-item';

type FaviroteLocationGroupItemProps = {
  offers: Offer[];
  location: string;
};

function FaviroteLocationItemGroup(props: FaviroteLocationGroupItemProps): JSX.Element {
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
        {offers.map((offer) => <FaviroteItem key={offer.id} offer={offer} />)}
      </div>
    </li>
  );
}

export default FaviroteLocationItemGroup;
