import { Location } from '../../mockup/locations';

function LocationItem(location: Location): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${location.isSelected ? 'tabs__item--active' : ''}`} href="#">
        <span>{location.title}</span>
      </a>
    </li>
  );
}
export default LocationItem;
