import { useState } from 'react';
import { RATING_OPTIONS } from '../../const';
import CommentRatingButton from './comment-rating-button';

function CommentForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
  });

  const handleRatingChange = (name: string, value: number): void => setFormData({ ...formData, [name]: value });

  const handleTextChange = (value: string): void => setFormData({ ...formData, comment: value });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {RATING_OPTIONS.map(({ value, title }) => (
          <CommentRatingButton
            key={value}
            value={value}
            title={title}
            onCommentRatingButtonChange={handleRatingChange}
            checked={formData.rating === value}
          />))}

      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => handleTextChange(evt.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
