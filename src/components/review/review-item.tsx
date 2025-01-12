import { OfferComment } from '../../types/offer-comment-type';
import { getStarsRating, convertDateToProperty, convertDateToHumanized } from '../../utils/utils';


type ReviewItemProps = {
  offerComment: OfferComment;
}

function ReviewItem(props: ReviewItemProps): JSX.Element {
  const { offerComment } = props;
  const { date, user: { name, avatarUrl }, comment, rating } = offerComment;
  const starsRating = getStarsRating(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: starsRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={convertDateToProperty(date)}>{convertDateToHumanized(date)}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
