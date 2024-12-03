import LocationItem from './location-item';
import { LOCATIONS } from '../../const';

function LocationList(): JSX.Element {
  return (
    <div>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {LOCATIONS.map((element) =>
              (<LocationItem key={element} title={element} isSelected={false} />))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default LocationList;

