import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import { Offer } from '../../types/offer-type';
import FavoriteList from '../../components/favorite/favorite-list';

type FavoritePageProp = {
  offers: Offer[];
}

function FavoritePage(props: FavoritePageProp): JSX.Element {
  const { offers } = props;

  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 cities. Избранное</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteList offers={offers} />
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default FavoritePage;
