import classNames from 'classnames';
import { MouseEvent } from 'react';

type LocationItemProps = {
  title: string;
  onCityChange: (evt: MouseEvent<HTMLAnchorElement>) => void;
  selectedCity: string;
}

function LocationItem(props: LocationItemProps): JSX.Element {
  const { title, onCityChange, selectedCity } = props;
  return (
    <li className="locations__item">
      <a className={
        classNames(
          'locations__item-link',
          'tabs__item',
          { 'tabs__item--active': title === selectedCity })
      }
      href="#"
      onClick={onCityChange}
      >
        <span>{title}</span>
      </a>
    </li >
  );
}
export default LocationItem;
