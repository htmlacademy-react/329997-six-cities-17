import classNames from 'classnames';

type LocationItemProps = {
  title: string;
  isSelected: boolean;
}

function LocationItem(props: LocationItemProps): JSX.Element {
  const { title, isSelected } = props;
  return (
    <li className="locations__item">
      <a className={
        classNames(
          'locations__item-link',
          'tabs__item',
          { 'tabs__item--active': isSelected })
      }
      href="#"
      >
        <span>{title}</span>
      </a>
    </li >
  );
}
export default LocationItem;
