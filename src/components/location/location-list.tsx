import LocationItem from './location-item';
import { useAppSelector, useAppDispatch } from '../hooks';
import { MouseEvent, useCallback, memo } from 'react';
import { SortType } from '../../const/const';
import { getOffersCityTitle } from '../../store/offer-process/offer-process.selectors';
import { changeCity, changeSortingType } from '../../store/offer-process/offer-process.slice';


type LocationListProps = {
  locations: string[];
}

function LocationList(props: LocationListProps): JSX.Element {
  const { locations } = props;
  const currentCity = useAppSelector(getOffersCityTitle);
  const dispatch = useAppDispatch();

  const handleCityChange = useCallback((evt: MouseEvent<HTMLAnchorElement>) => {
    dispatch(changeCity(evt.currentTarget.text));
    dispatch(changeSortingType(SortType.POPULAR));
  }, [dispatch]);

  return (
    <div>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {locations.map((element) =>
              (<LocationItem key={element} title={element} selectedCity={currentCity} onCityChange={handleCityChange} />))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default memo(LocationList);

