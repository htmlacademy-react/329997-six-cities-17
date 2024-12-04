import OfferItem from './offer-item';
import { Offer } from '../../mocks/offers';

type OfferListProps = {
  offers: Offer[];
}

function OfferList(props: OfferListProps): JSX.Element {
  const { offers } = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((element) =>
        (<OfferItem key={element.id} offer={element} />))}
    </div>
  );
}

export default OfferList;
