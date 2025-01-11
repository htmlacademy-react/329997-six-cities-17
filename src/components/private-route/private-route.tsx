import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../../store/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
  navigateTo: AppRoute;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const { children, navigateTo, authorizationStatus } = props;

  return (
    authStatus === authorizationStatus
      ? children
      : <Navigate to={navigateTo} />
  );
}

export default PrivateRoute;
