import classNames from 'classnames';
import { memo } from 'react';
import type { LocationItem } from './types';

function LocationItem(props: LocationItem): JSX.Element {
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
export default memo(LocationItem);
