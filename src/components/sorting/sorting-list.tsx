import classNames from 'classnames';
import { useAppSelector, useAppDispatch } from '../hooks';
import { changeSortingState, changeSortingType } from '../../store/action';
import { MouseEvent } from 'react';
import SortingItem from './sorting-item';
import { SORT_TYPE } from '../../const';

function SortingList(): JSX.Element {
  const currentSortingState = useAppSelector((state) => state.isSortingOpened);
  const currentSorting = useAppSelector((state) => state.currentSortingType);
  const dispatch = useAppDispatch();
  const sortingTypes = Object.values(SORT_TYPE).map((element) => element);

  const handleSortingOpenClick = () => {
    dispatch(changeSortingState({ sortingState: true }));
  };

  const handleSortingTypeClick = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    dispatch(changeSortingType({ sortingType: evt.currentTarget.innerText }));
    dispatch(changeSortingState({ sortingState: false }));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={handleSortingOpenClick}
      >
        {currentSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', { 'places__options--opened': currentSortingState })} >
        {sortingTypes.map((element) =>
          (<SortingItem key={element} sortingType={element} onSortingTypeChange={handleSortingTypeClick} />))}
      </ul>
    </form >
  );
}

export default SortingList;
