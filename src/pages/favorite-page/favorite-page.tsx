import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import FavoriteList from '../../components/favorite/favorite-list';
import { useAppSelector } from '../../components/hooks';
import { getOffersFavorite } from '../../store/selectors';


function FavoritePage(): JSX.Element {

  const favoriteOffers = useAppSelector(getOffersFavorite);

  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 cities. Избранное</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteList offers={favoriteOffers} />
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default FavoritePage;
