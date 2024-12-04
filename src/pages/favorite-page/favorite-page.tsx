import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import { Offer } from '../../types/offer-type';
import FavoriteList from '../../components/favorite/favorite-list';

type FavoritePageProp = {
  offers: Offer[];
  locations: string[];
}

function FavoritePage(props: FavoritePageProp): JSX.Element {
  const { offers, locations } = props;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Избранное</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteList offers={offers} locations={locations}/>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritePage;
