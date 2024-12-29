import LocationItem from './location-item';
import { useAppSelector, useAppDispatch } from '../hooks';
import { MouseEvent } from 'react';
import { changeCity, changeSortingType } from '../../store/action';
import { SortType } from '../../const/const';

type LocationListProps = {
  locations: string[];
}

function LocationList(props: LocationListProps): JSX.Element {
  const { locations } = props;
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleCityChange = (evt: MouseEvent<HTMLAnchorElement>) => {
    dispatch(changeCity({ city: evt.currentTarget.text }));
    dispatch(changeSortingType(SortType.POPULAR));
  };
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

export default LocationList;

