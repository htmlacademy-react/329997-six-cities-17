import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, FormEvent, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { loginAction } from '../../store/api-action';
import { AppRoute, LOCATIONS, SignInState, SortType } from '../../const/const';
import { getRandomElement } from '../../utils/utils';
import { getSigningInState } from '../../store/auth-process/auth-process.selectors';
import { changeCity, changeSortingType } from '../../store/offer-process/offer-process.slice';

function LoginPage(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const signingInStatus = useAppSelector(getSigningInState);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCityClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    dispatch(changeCity(evt.currentTarget.text));
    dispatch(changeSortingType(SortType.POPULAR));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            navigate(AppRoute.Main);
          }
        });
    }
  };

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>6 cities. Вход</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={loginRef}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                pattern='^.*(?=.*[a-zA-Z])(?=.*\d).*$'
                title='Пароль должен содержать как минимум одну букву и одну цифру!'
                required
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
            >
              {signingInStatus === SignInState.SigningIn ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              className="locations__item-link"
              to={AppRoute.Main}
              onClick={handleCityClick}
            >
              <span>{getRandomElement(LOCATIONS)}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
