import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorite-screen/favorite-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppScreenProps = {
  placesToStay: number;
  emailAddress: string;
  favoriteCount: number;
}

function App({ placesToStay, emailAddress, favoriteCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen placesToStay={placesToStay} emailAddress={emailAddress} favoriteCount={favoriteCount} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesScreen emailAddress={emailAddress} favoriteCount={favoriteCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen emailAddress={emailAddress} favoriteCount={favoriteCount} />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
