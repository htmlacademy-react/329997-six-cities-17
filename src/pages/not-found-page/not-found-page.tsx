import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to='/'>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
          </div>
        </div>
      </header>
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
