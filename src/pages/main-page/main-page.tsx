import { Helmet } from 'react-helmet-async';
import OfferList from '../../components/offer/offer-list';
import LocationList from '../../components/location/location-list';
import Sorting from '../../components/sorting/sorting';
import { Offer } from '../../types/offer-type';

type MainPageProps = {
  offers: Offer[];
  locations: string[];
}

function MainPage(props: MainPageProps): JSX.Element {
  const { offers, locations } = props;
  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <LocationList locations={locations}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <Sorting />
            <OfferList offers={offers}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
