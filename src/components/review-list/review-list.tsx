import { memo } from 'react';
import { MAX_COMMENTS_COUNT } from '../../const/const';
import ReviewItem from '../review-item/review-item';
import { sortComments } from '../../utils/utils';
import type { ReviewList } from './types';

function ReviewList(props: ReviewList): JSX.Element {
  const { offerComments } = props;
  const offerCommentsShown = sortComments(offerComments)?.slice(0, MAX_COMMENTS_COUNT);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerComments?.length}</span></h2>
      <ul className="reviews__list">
        {offerCommentsShown.map((element) => (
          <ReviewItem
            key={element.id}
            offerComment={element}
          />
        ))}
      </ul>
    </>
  );
}

export default memo(ReviewList);
