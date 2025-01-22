import { getFavoriteOffersByLocation } from '../../utils/utils';
import FaviroteLocationGroupItem from '../favorite-location-group-item/favorite-location-group-item';
import type { FaviroteLocationGroup } from './types';

function FaviroteLocationGroup(props: FaviroteLocationGroup): JSX.Element {
  const { offers } = props;
  const favoriteOffers = getFavoriteOffersByLocation(offers);
  return (
    <>{
      favoriteOffers.map((element) =>
        <FaviroteLocationGroupItem key={element.name} offers={element.places} location={element.name} />
      )
    }
    </>
  );
}

export default FaviroteLocationGroup;
