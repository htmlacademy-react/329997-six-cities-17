type Location = {
  id: string;
  title: string;
  isSelected: boolean;
}

const mockLocations: Location[] = [
  {
    id: '1',
    title: 'Paris',
    isSelected: false,
  },
  {
    id: '2',
    title: 'Cologne',
    isSelected: false,
  },
  {
    id: '3',
    title: 'Brussels',
    isSelected: false,
  },
  {
    id: '4',
    title: 'Amsterdam',
    isSelected: true,
  },
  {
    id: '5',
    title: 'Hamburg',
    isSelected: false,
  },
  {
    id: '6',
    title: 'Dusseldorf',
    isSelected: false,
  },
];

export { mockLocations };
export type { Location };
