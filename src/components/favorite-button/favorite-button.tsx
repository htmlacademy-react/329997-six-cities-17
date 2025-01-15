import { AppRoute, AuthorizationState, FavoriteButtonType, FavoriteStatus, FetchState } from '../../const/const';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAuthorizationState, getOfferFavoriteStatusState } from '../../store/selectors';
import { toggleOfferFavoriteStatusAction } from '../../store/api-action';
import { redirectToRoute } from '../../store/action';

type FavoriteButtonProps = {
  isFavorite: boolean;
  favoriteButtonType: FavoriteButtonType;
  id: string;
}
function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const { isFavorite, favoriteButtonType, id } = props;
  const dispatch = useAppDispatch();
  const authState = useAppSelector(getAuthorizationState);
  const favoriteToggleState = useAppSelector(getOfferFavoriteStatusState);

  const handleFavoriteButtonClick = () => {
    if (authState === AuthorizationState.Auth) {
      dispatch(toggleOfferFavoriteStatusAction({ id, status: isFavorite ? FavoriteStatus.UnsetFavorite : FavoriteStatus.SetFavorite }));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  return (
    <button
      className={classNames(
        `${favoriteButtonType}__bookmark-button`,
        { 'place-card__bookmark-button--active': isFavorite && favoriteButtonType === FavoriteButtonType.PLACE_CARD },
        { 'offer__bookmark-button--active': isFavorite && favoriteButtonType === FavoriteButtonType.OFFER },
        'button', 'type="button"'
      )}
      onClick={handleFavoriteButtonClick}
      disabled = {favoriteToggleState === FetchState.Loading}
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
