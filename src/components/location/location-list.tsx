import LocationItem from './location-item';

type LocationListProps = {
  locations: string[];
}

function LocationList(props: LocationListProps): JSX.Element {
  const { locations } = props;
  return (
    <div>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {locations.map((element) =>
              (<LocationItem key={element} title={element} isSelected={false} />))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default LocationList;

