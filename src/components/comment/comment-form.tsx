import { useState } from 'react';
import { RATING_OPTIONS, CommentOption } from '../../const';
import CommentRatingButton from './comment-rating-button';
import { checkCommentInRange } from '../../utils';

function CommentForm(): JSX.Element {
  const [formRating, setFormRating] = useState(0);
  const [formComment, setFormComment] = useState('');

  const handleRatingChange = (rating: number): void => setFormRating(rating);
  const handleCommentChange = (comment: string): void => setFormComment(comment);

  return (
    <form className="reviews__form form">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {RATING_OPTIONS.map(({ value, title }) => (
          <CommentRatingButton
            key={value}
            value={value}
            title={title}
            onCommentRatingButtonChange={handleRatingChange}
            checked={formRating === value}
          />))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        value={formComment}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => handleCommentChange(evt.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(formRating && checkCommentInRange(CommentOption.minLength, CommentOption.maxLength, formComment))}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
