import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { UserInfo } from '../../types/user-info-type';
import { Offer } from '../../mocks/offers';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorite-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';

type AppProps = {
  userInfo: UserInfo;
  offers: Offer[];
}

function App(props: AppProps): JSX.Element {
  const { userInfo: { emailAddress, favoriteCount }, offers } = props;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Layout emailAddress={emailAddress} favoriteCount={favoriteCount} />}
          >
            <Route
              index element={<MainPage offers={offers} />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage />}
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
