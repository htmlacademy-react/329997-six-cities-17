import { Helmet } from 'react-helmet-async';
import OfferList from '../../components/offer/offer-list';
import LocationList from '../../components/location/location-list';
import Sorting from '../../components/sorting/sorting';
import { Offer } from '../../types/offer-type';
import Map from '../../components/map/map';
import { getOffersCities } from '../../utils';
import { useState } from 'react';

type MainPageProps = {
  offers: Offer[];
  locations: string[];
}

function MainPage(props: MainPageProps): JSX.Element {
  const { offers, locations } = props;
  const offersCities = getOffersCities(offers);

  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const handleOfferMouseEnter = (offer: Offer) => {
    setSelectedOffer(offer);
  };
  const handleOfferMouseLeave = () => {
    setSelectedOffer(null);
  };

  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <LocationList locations={locations} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <Sorting />
            <OfferList offers={offers} onOfferMouseEnter={handleOfferMouseEnter} onOfferMouseLeave={handleOfferMouseLeave} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={offersCities[0]} offers={offers} selectedOffer={selectedOffer} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
