import LocationItem from './location-item';
import { mockLocations } from '../../mockup/locations';

function LocationList(): JSX.Element {
  return (
    <div>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {mockLocations.map((element) => <LocationItem key={element.id} {...element} />)}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default LocationList;

