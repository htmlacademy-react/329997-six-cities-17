import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import OfferList from '../../components/offer/offer-list';
import LocationList from '../../components/location/location-list';
import SortingList from '../../components/sorting/sorting-list';
import { Offer } from '../../types/offer-type';
import Map from '../../components/map/map';
import { useAppSelector } from '../../components/hooks';
import { LOCATIONS } from '../../const/const';
import { OfferPageType } from '../../const/const';
import { City } from '../../types/city_types/city-type';
import { MouseEvent } from 'react';

function MainPage(): JSX.Element {
  const currentOffers = useAppSelector((state) => state.currentOffers);
  const currentCityTitle = useAppSelector((state) => state.city);
  const currentCity: City = currentOffers[0].city;

  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const handleOfferMouseEnter = (evt: MouseEvent<HTMLElement>) => {
    const currentOffer = currentOffers.find((element) => element.id === evt.currentTarget.dataset.id);
    if (!currentOffer) {
      return;
    }
    setSelectedOffer(currentOffer);
  };
  const handleOfferMouseLeave = () => {
    setSelectedOffer(null);
  };

  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <LocationList locations={LOCATIONS} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentOffers.length} places to stay {currentCityTitle}</b>
            <SortingList />
            <OfferList offers={currentOffers} onOfferMouseEnter={handleOfferMouseEnter} onOfferMouseLeave={handleOfferMouseLeave} pageType={OfferPageType.CITIES} />
          </section>
          <div className="cities__right-section">
            <Map city={currentCity} offers={currentOffers} selectedOffer={selectedOffer} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
