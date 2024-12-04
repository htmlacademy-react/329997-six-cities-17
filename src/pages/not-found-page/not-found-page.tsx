import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderLogo from '../../components/header/header-logo';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. 404. Page not found</title>
      </Helmet>
      <HeaderLogo />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Something`s gone wrong...</h1>
            <img className="login__title" src="img/thinking-emoji.png" alt="thinking-emoji" width={64} height={64} />
            <div className="locations__item">
              <Link className="locations__item-link" to='/'>
                <span>Go to main page</span>
              </Link>
            </div>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <div className="locations__item-link">
                <span>404. Page not found</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
