import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationState, FetchState } from '../../const/const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorite-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import RedirectRoute from '../redirect-route/redirect-route';
import Layout from '../layout/layout';
import Loading from '../loading/loading';
import { useAppSelector } from '../hooks';
import { getAuthorizationState, getOffersState } from '../../store/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationState);
  const offersLoadingState = useAppSelector(getOffersState);

  if (authorizationStatus === AuthorizationState.Unknown || offersLoadingState === FetchState.Loading) {
    return <Loading />;
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
                <RedirectRoute navigateTo={AppRoute.Login} authorizationState={AuthorizationState.Auth}>
                  <FavoritesPage />
                </RedirectRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage />}
            />
            <Route
              path={AppRoute.Login}
              element={
                <RedirectRoute navigateTo={AppRoute.Main} authorizationState={AuthorizationState.NoAuth}>
                  <LoginPage />
                </RedirectRoute>
              }
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
