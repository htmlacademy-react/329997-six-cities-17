import { Offer } from '../../types/offer-type';
import { getFavoriteOffers } from '../../utils';
import FavoriteEmpty from './favorite-empty';
import FaviroteLocationItemGroup from './favorite-location-group-item';

type FaviroteLocationGroupProps = {
  offers: Offer[];
};

function FaviroteLocationGroup(props: FaviroteLocationGroupProps): JSX.Element {
  const { offers } = props;
  const favoriteOffers = getFavoriteOffers(offers);
  if (favoriteOffers === undefined) {
    return (
      <FavoriteEmpty />
    );
  }
  return (
    <>{
      favoriteOffers.map((element) =>
        <FaviroteLocationItemGroup key={element.name} offers={element.places} location={element.name} />
      )
    }
    </>
  );
}

export default FaviroteLocationGroup;
