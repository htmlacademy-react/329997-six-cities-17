import { MouseEvent } from 'react';

export type LocationItem = {
  title: string;
  onCityChange: (evt: MouseEvent<HTMLAnchorElement>) => void;
  selectedCity: string;
}
