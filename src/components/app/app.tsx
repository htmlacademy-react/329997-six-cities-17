import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorite-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import Loading from '../loading/loading';
import { useAppSelector } from '../hooks';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isLoading = useAppSelector((state) => state.isLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isLoading) {
    return (
      <Loading />
    );
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Layout />}
          >
            <Route
              index element={<MainPage />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute navigateTo={AppRoute.Login} authorizationStatus={AuthorizationStatus.Auth}>
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
              element={
                <PrivateRoute navigateTo={AppRoute.Main} authorizationStatus={AuthorizationStatus.NoAuth}>
                  <LoginPage />
                </PrivateRoute>
              } //можно ли таким способом использовать PrivateRoute для выполнения требования ТЗ? редирект на главную страницу для авторизованного пользователя
            />
          </Route>
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
