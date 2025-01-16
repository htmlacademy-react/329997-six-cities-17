import { AuthorizationState, FetchState, NameSpace, SignInState } from '../../const/const';
import { AppState } from '../../types/state-type';
import { UserData } from '../../types/user-data-type';

export const getUserData = (state: AppState): UserData | null => state[NameSpace.Auth].user;
export const getUserDataState = (state: AppState): FetchState => state[NameSpace.Auth].userState;
export const getSigningInState = (state: AppState): SignInState => state[NameSpace.Auth].signingInState;
export const getAuthorizationState = (state: AppState): AuthorizationState => state[NameSpace.Auth].authorizationState;
