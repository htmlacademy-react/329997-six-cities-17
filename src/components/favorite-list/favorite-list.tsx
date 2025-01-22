import FaviroteLocationGroup from '../favorite-location-group/favorite-location-group';
import type { FaviroteList } from './types';

function FavoriteList(props: FaviroteList): JSX.Element {
  const { offers } = props;
  return (
    <ul className="favorites__list">
      <FaviroteLocationGroup offers={offers} />
    </ul>
  );
}

export default FavoriteList;
