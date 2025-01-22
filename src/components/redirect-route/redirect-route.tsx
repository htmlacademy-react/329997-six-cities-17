import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { getAuthorizationState } from '../../store/auth-process/auth-process.selectors';
import type { RedirectRoute } from './types';

function RedirectRoute(props: RedirectRoute): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationState);
  const { children, navigateTo, authorizationState } = props;

  return (
    authStatus === authorizationState
      ? children
      : <Navigate to={navigateTo} />
  );
}

export default RedirectRoute;
