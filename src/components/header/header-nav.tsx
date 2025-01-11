import { useAppSelector, useAppDispatch } from '../hooks';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { MouseEvent } from 'react';
import { logoutAction } from '../../store/api-action';
import { getOffersFavorite, getUserData } from '../../store/selectors';

function HeaderNav(): JSX.Element {
  const favoriteCount = useAppSelector(getOffersFavorite).length;
  const user = useAppSelector(getUserData);


  const dispatch = useAppDispatch();

  const handleLogout = (evt: MouseEvent<HTMLSpanElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Favorites}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${user?.avatarUrl})`, borderRadius: '10px'}}>
            </div>

            {!user && <span className="header__login">Sign in</span>}

            {user &&
              <>
                <span className="header__user-name user__name">{user.email}</span>
                <span className="header__favorite-count">{favoriteCount}</span>
              </>}
          </Link>
        </li>
        {user &&
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              <span
                className="header__signout"
                onClick={handleLogout}
              >
                Sign out
              </span>
            </a>
          </li>}
      </ul>
    </nav>
  );
}

export default HeaderNav;
