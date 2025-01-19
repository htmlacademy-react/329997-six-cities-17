import { AppRoute, AuthorizationState, FavoriteButtonType, FetchState } from '../../const/const';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addOfferToFavoriteAction, removeOfferFromFavoriteAction } from '../../store/api-action';
import { redirectToRoute } from '../../store/action';
import { useCallback } from 'react';
import { getAuthorizationState } from '../../store/auth-process/auth-process.selectors';
import { getFavoriteOfferStatusState } from '../../store/favorite-offers-process/favorite-offers-process.selectors';


type FavoriteButtonProps = {
  isFavorite: boolean;
  favoriteButtonType: FavoriteButtonType;
  id: string;
}
function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const { isFavorite, favoriteButtonType, id } = props;
  const dispatch = useAppDispatch();
  const authState = useAppSelector(getAuthorizationState);
  const favoriteToggleState = useAppSelector(getFavoriteOfferStatusState);

  const handleFavoriteButtonClick = useCallback(() => {
    if (authState === AuthorizationState.Auth) {
      if (isFavorite) {
        dispatch(removeOfferFromFavoriteAction(id));
      } else {
        dispatch(addOfferToFavoriteAction(id));
      }
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  }, [authState, dispatch, isFavorite, id]);

  return (
    <button
      className={classNames(
        `${favoriteButtonType}__bookmark-button`,
        { 'place-card__bookmark-button--active': isFavorite && favoriteButtonType === FavoriteButtonType.PLACE_CARD },
        { 'offer__bookmark-button--active': isFavorite && favoriteButtonType === FavoriteButtonType.OFFER },
        'button'
      )}
      onClick={handleFavoriteButtonClick}
      disabled={favoriteToggleState === FetchState.Loading}
    >
      <svg className={`${favoriteButtonType}__bookmark-icon`}
        width={favoriteButtonType === FavoriteButtonType.PLACE_CARD ? 18 : 31}
        height={favoriteButtonType === FavoriteButtonType.PLACE_CARD ? 19 : 33}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;
