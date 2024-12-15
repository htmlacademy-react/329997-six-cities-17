import { Review } from '../types/review-type';

const mockReviews: Review[] = [
  {
    'id': '167ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    'date': '2019-05-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Conner',
      'avatarUrl': '../img/avatar.svg',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 4
  },
  {
    'id': '267ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    'date': '2020-06-09T15:13:56.569Z',
    'user': {
      'name': 'Jane Doe',
      'avatarUrl': '../img/avatar.svg',
      'isPro': false
    },
    'comment': 'Great place, great people, i am the best, noone knows who am i!',
    'rating': 5
  },
  {
    'id': '367ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    'date': '2021-07-10T16:13:56.569Z',
    'user': {
      'name': 'John Cina',
      'avatarUrl': '../img/avatar.svg',
      'isPro': false
    },
    'comment': 'And his name is John Cina! *music playing* *music playing*!',
    'rating': 5
  }
];

export { mockReviews };
