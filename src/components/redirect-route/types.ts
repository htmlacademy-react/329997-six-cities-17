import { AppRoute, AuthorizationState } from '../../const/const';

export type RedirectRoute = {
  children: JSX.Element;
  navigateTo: AppRoute;
  authorizationState: AuthorizationState;
}
