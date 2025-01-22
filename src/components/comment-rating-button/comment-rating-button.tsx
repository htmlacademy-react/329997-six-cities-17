import { memo } from 'react';
import type { CommentRatingButton } from './types';

function CommentRatingButton(props: CommentRatingButton): JSX.Element {
  const { value, checked, disabled, title, onCommentRatingButtonChange } = props;
  return (
    <>
      <input className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={(evt) => onCommentRatingButtonChange(Number(evt.target.value))}
      />
      <label htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default memo(CommentRatingButton);
