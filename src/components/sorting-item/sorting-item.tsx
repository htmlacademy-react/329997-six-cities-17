import classNames from 'classnames';
import { useAppSelector } from '../hooks';
import { getCurrentSortingType } from '../../store/offer-process/offer-process.selectors';
import type { SortingItem } from './types';

function SortingItem(props: SortingItem): JSX.Element {
  const { onSortingTypeChange, sortingType } = props;
  const currentSorting = useAppSelector(getCurrentSortingType);

  return (
    <li className={classNames('places__option', { 'places__option--active': sortingType as string === currentSorting })} tabIndex={0}
      onClick={() => onSortingTypeChange(sortingType)}
    >
      {sortingType}
    </li>
  );
}

export default SortingItem;
