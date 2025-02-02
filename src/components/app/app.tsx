import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../hooks';
import HistoryRouter from '../history-route/history-route';
import { AppRoute, AuthorizationState, FetchState } from '../../const/const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorite-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import RedirectRoute from '../redirect-route/redirect-route';
import Layout from '../layout/layout';
import Loading from '../loading/loading';
import browserHistory from '../../browser-history/browser-history';
import { getAuthorizationState } from '../../store/auth-process/auth-process.selectors';
import { getOffersState } from '../../store/offer-process/offer-process.selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationState);
  const offersLoadingState = useAppSelector(getOffersState);

  if (authorizationStatus === AuthorizationState.Unknown || offersLoadingState === FetchState.Loading) {
    return <Loading />;
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
