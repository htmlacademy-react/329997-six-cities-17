import OfferList from '../../components/offer/offer-list';
import Header from '../../components/header/header';
import LocationList from '../../components/location/location-list';
import Sorting from '../../components/sorting/sorting';

type MainPageProps = {
  placesToStay: number;
  emailAddress: string;
  favoriteCount: number;
}

function MainPage({ placesToStay, emailAddress, favoriteCount }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header
        emailAddress={emailAddress}
        favoriteCount={favoriteCount}
      />
      <main className="page__main page__main--index">
        <LocationList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesToStay} places to stay in Amsterdam</b>
              <Sorting/>
              <OfferList />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
