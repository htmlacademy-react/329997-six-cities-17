import { Helmet } from 'react-helmet-async';
import { useCallback, useState, MouseEvent, memo } from 'react';
import classNames from 'classnames';
import OfferList from '../../components/offer-list/offer-list';
import LocationList from '../../components/location-list/location-list';
import SortingList from '../../components/sorting-list/sorting-list';
import { Offer } from '../../types/offer-type';
import Map from '../../components/map/map';
import { useAppSelector } from '../../components/hooks';
import { BLANK_CITY, LOCATIONS } from '../../const/const';
import { OfferPageType } from '../../const/const';
import { City } from '../../types/city-type';
import OfferListEmpty from '../../components/offer-list-empty/offer-list-empty';
import { getCurrentOffers, getOffersCityTitle } from '../../store/offer-process/offer-process.selectors';

function MainPage(): JSX.Element {
  const currentOffers = useAppSelector(getCurrentOffers);
  const currentCityTitle = useAppSelector(getOffersCityTitle);
  const isCurrentOffersEmpty = currentOffers.length === 0;

  const currentCity: City = isCurrentOffersEmpty ? BLANK_CITY : currentOffers[0].city;

  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const handleOfferMouseEnter = useCallback((evt: MouseEvent<HTMLElement>) => {
    const currentOffer = currentOffers.find((element) => element.id === evt.currentTarget.dataset.id);
    if (!currentOffer) {
      return;
    }
    setSelectedOffer(currentOffer);
  }, [currentOffers]);

  const handleOfferMouseLeave = () => {
    setSelectedOffer(null);
  };

  return (
    <main className={classNames(
      'page__main',
      'page__main--index',
      { 'page__main--index-empty': isCurrentOffersEmpty })}
    >
      <Helmet>
        <title>6 cities. Главная страница</title>
      </Helmet>
      <LocationList locations={LOCATIONS} />
      {isCurrentOffersEmpty && <OfferListEmpty city={currentCityTitle} />}

      {!isCurrentOffersEmpty &&
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} {currentOffers.length < 2 ? 'place' : 'places'} to stay in {currentCityTitle}</b>
              <SortingList />
              <OfferList offers={currentOffers} onOfferMouseEnter={handleOfferMouseEnter} onOfferMouseLeave={handleOfferMouseLeave} pageType={OfferPageType.CITIES} />
            </section>
            <div className="cities__right-section">
              <Map city={currentCity} offers={currentOffers} selectedOffer={selectedOffer} />
            </div>
          </div>
        </div>}
    </main>
  );
}

export default memo(MainPage);
