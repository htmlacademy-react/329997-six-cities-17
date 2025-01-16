import { MAX_COMMENTS_COUNT } from '../../const/const';
import { OfferComment } from '../../types/offer-comment-type';
import ReviewItem from './review-item';
import { sortComments } from '../../utils/utils';
import { memo } from 'react';


type ReviewListProps = {
  offerComments: OfferComment[];
}
function ReviewList(props: ReviewListProps): JSX.Element {
  const { offerComments } = props;
  let offersCommentsShown = offerComments?.slice(0, MAX_COMMENTS_COUNT);
  offersCommentsShown = offersCommentsShown && sortComments(offersCommentsShown);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerComments?.length}</span></h2>
      <ul className="reviews__list">
        {offersCommentsShown.map((element) => (
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
