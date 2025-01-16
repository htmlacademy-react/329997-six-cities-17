import { Offer } from '../../types/offer-type';
import { getFavoriteOffersByLocation } from '../../utils/utils';
import FaviroteLocationGroupItem from './favorite-location-group-item';

type FaviroteLocationGroupProps = {
  offers: Offer[];
};

function FaviroteLocationGroup(props: FaviroteLocationGroupProps): JSX.Element {
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
