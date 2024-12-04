import { Offer } from '../../types/offer-type';
import FaviroteItem from './favorite-item';
import { getFavoriteOffers } from '../../utils';

type FaviroteListProps = {
  offers: Offer[];
  locations: string[];
};

function FavoriteList(props: FaviroteListProps): JSX.Element {
  const { offers, locations } = props;
  const favoriteOffers = getFavoriteOffers(offers);
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">

      </div>
    </li>
  );
}

export default FavoriteList;
