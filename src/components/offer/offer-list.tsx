import OfferItem from './offer-item';
import { mockOffers } from '../../mockup/offers';

function OfferList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {mockOffers.map((element) =>
        (
          <OfferItem
            key={element.id}
            {...element}
          />
        ))}
    </div>
  );
}

export default OfferList;
