import { Offer } from '../../types/offer-type';
import FaviroteLocationGroup from './favorite-location-group';

type FaviroteListProps = {
  offers: Offer[];
};

function FavoriteList(props: FaviroteListProps): JSX.Element {
  const { offers } = props;
  return (
    <ul className="favorites__list">
      <FaviroteLocationGroup offers={offers} />
    </ul>
  );
}

export default FavoriteList;
