import { Offer } from '../../types/offer-type';
import { getFavoriteOffers } from '../../utils/utils';
import FavoriteEmpty from './favorite-empty';
import FaviroteLocationGroupItem from './favorite-location-group-item';

type FaviroteLocationGroupProps = {
  offers: Offer[];
};

function FaviroteLocationGroup(props: FaviroteLocationGroupProps): JSX.Element {
  const { offers } = props;
  const favoriteOffers = getFavoriteOffers(offers);
  if (!favoriteOffers.length) {
    return (
      <FavoriteEmpty />
    );
  }
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
