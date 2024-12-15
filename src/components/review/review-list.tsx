import { Review } from '../../types/review-type';
import ReviewItem from './review-item';


type ReviewListProps = {
  reviews: Review[];
}
function ReviewList(props: ReviewListProps): JSX.Element {
  const { reviews } = props;
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((element) => (
          <ReviewItem
            key={element.id}
            review={element}
          />
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
