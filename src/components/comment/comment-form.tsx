import { ChangeEvent, useState, useCallback, memo } from 'react';
import { RATING_OPTIONS, CommentOption, SubmitState } from '../../const/const';
import CommentRatingButton from './comment-rating-button';
import { checkCommentInRange } from '../../utils/utils';
import { useAppDispatch, useAppSelector } from '../hooks';
import { submitCommentAction } from '../../store/api-action';
import { getSubmittingState } from '../../store/offer-extended-process/offer-extended-process.selectors';

type CommentFormProps = {
  id: string;
}

function CommentForm(props: CommentFormProps): JSX.Element {
  const submittingState = useAppSelector(getSubmittingState);
  const { id } = props;
  const dispatch = useAppDispatch();

  const [formRating, setFormRating] = useState(0);
  const [formComment, setFormComment] = useState('');

  const comment = formComment;
  const rating = formRating;

  const handleRatingChange = useCallback((value: number): void => setFormRating(value),[]);

  const handleCommentChange = (text: string): void => setFormComment(text);

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (id) {
      dispatch(submitCommentAction({ comment, rating, id }));
      setFormRating(0);
      setFormComment('');
    }
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleFormSubmit}
    >
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
          disabled={!(formRating && checkCommentInRange(CommentOption.minLength, CommentOption.maxLength, formComment)) || submittingState === SubmitState.Submitting}
        >
          {submittingState === SubmitState.Submitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default memo(CommentForm);
