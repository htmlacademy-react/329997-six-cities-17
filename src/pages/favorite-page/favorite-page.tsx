import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import FavoriteList from '../../components/favorite/favorite-list';
import { useAppSelector } from '../../components/hooks';
import { getOffersFavorite } from '../../store/selectors';
import FavoriteEmpty from '../../components/favorite/favorite-empty';
import classNames from 'classnames';


function FavoritePage(): JSX.Element {

  const favoriteOffers = useAppSelector(getOffersFavorite);
  const isFavoritesEmpty = favoriteOffers.length === 0;

  return (
    <>
      <main className={classNames(
        'page__main',
        'page__main--favorites',
        { 'page__main--favorites-empty': isFavoritesEmpty })}
      >
        <Helmet>
          <title>6 cities. Избранное</title>
        </Helmet>
        <div className="page__favorites-container container">
          <section className={classNames(
            'favorites',
            { 'favorites--empty': isFavoritesEmpty })}
          >
            {isFavoritesEmpty && <FavoriteEmpty />}
            {!isFavoritesEmpty &&
            <>
              <h1 className="favorites__title">Saved listing</h1>
              <FavoriteList offers={favoriteOffers} />
            </>}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FavoritePage;
