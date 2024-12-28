import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from '../../const/const';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function HeaderNav(): JSX.Element {
  const userEmail = useAppSelector((state) => state.login);
  const favoriteCount = useAppSelector((state) => state.favoriteOffers.length);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const isNoAuth = authorizationStatus === AuthorizationStatus.NoAuth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>

            {isNoAuth && <span className="header__login">Sign in</span>}

            {isAuth &&
              <>
                <span className="header__user-name user__name">{userEmail}</span>
                <span className="header__favorite-count">{favoriteCount}</span>
              </>}
          </Link>
        </li>
        {isAuth &&
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.Main}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

export default HeaderNav;
