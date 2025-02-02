import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute } from '../../const/const';
import HeaderLogo from '../header-logo/header-logo';
import HeaderNav from '../header-nav/header-nav';
import { useAppSelector } from '../hooks';
import { getFavoriteOffers } from '../../store/favorite-offers-process/favorite-offers-process.selectors';

function Layout(): JSX.Element {
  const appPath = useLocation().pathname as AppRoute;
  const isPageGray = (appPath === AppRoute.Main || appPath === AppRoute.Login);
  const isPageMain = (appPath === AppRoute.Main);
  const isPageLogin = (appPath === AppRoute.Login);
  const isPageFavorites = (appPath === AppRoute.Favorites);
  const isFavoritesEmpty = useAppSelector(getFavoriteOffers).length === 0;
  return (
    <div className={classNames(
      'page',
      { 'page--gray': isPageGray },
      { 'page--main': isPageMain },
      { 'page--login': isPageLogin },
      { 'page--favorites-empty': isPageFavorites && isFavoritesEmpty }
    )}
    >
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo />
            </div>
            {isPageLogin || <HeaderNav />}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
