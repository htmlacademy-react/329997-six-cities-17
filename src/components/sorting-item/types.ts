import { SortType } from '../../const/const';

export type SortingItem = {
  onSortingTypeChange: (inputSorting: SortType) => void;
  sortingType: SortType;
}
