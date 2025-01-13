import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationState } from '../../const/const';
import { useAppSelector } from '../hooks';
import { getAuthorizationState } from '../../store/selectors';

type RedirectRouteProps = {
  children: JSX.Element;
  navigateTo: AppRoute;
  authorizationState: AuthorizationState;
}

function RedirectRoute(props: RedirectRouteProps): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationState);
  const { children, navigateTo, authorizationState } = props;

  return (
    authStatus === authorizationState
      ? children
      : <Navigate to={navigateTo} />
  );
}

export default RedirectRoute;
