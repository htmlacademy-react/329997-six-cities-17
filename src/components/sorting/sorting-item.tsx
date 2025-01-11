import classNames from 'classnames';
import { useAppSelector } from '../hooks';
import { SortType } from '../../const/const';
import { getCurrentSortingType } from '../../store/selectors';

type SortingItemProps = {
  onSortingTypeChange: (inputSorting: SortType) => void;
  sortingType: SortType;
}

function SortingItem(props: SortingItemProps): JSX.Element {
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
