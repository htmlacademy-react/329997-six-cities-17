import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute } from '../../const';
import { UserInfo } from '../../types/user-info-type';
import HeaderLogo from '../header/header-logo';
import HeaderNav from '../header/header-nav';

function Layout(props: UserInfo): JSX.Element {
  const { emailAddress, favoriteCount } = props;
  const appPath = useLocation().pathname as AppRoute;
  const isPageGray = (appPath === AppRoute.Main || appPath === AppRoute.Login);
  const isPageMain = (appPath === AppRoute.Main);
  const isPageLogin = (appPath === AppRoute.Login);
  const isPageFavorites = (appPath === AppRoute.Favorites);
  const isFavoritesEmpty: boolean = false; //заготовка
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
            {!isPageLogin && <HeaderNav emailAddress={emailAddress} favoriteCount={favoriteCount} />}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
