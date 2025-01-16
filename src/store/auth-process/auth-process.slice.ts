import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationState, FetchState, NameSpace, SignInState } from '../../const/const';
import { UserData } from '../../types/user-data-type';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { toast } from 'react-toastify';

const initialState: {
  user: UserData | null;
  userState: FetchState;
  authorizationState: AuthorizationState;
  signingInState: SignInState;
} =
{
  user: null,
  userState: FetchState.Unknown,
  authorizationState: AuthorizationState.Unknown,
  signingInState: SignInState.Unknown,
};

export const authProcess = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationState = AuthorizationState.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationState = AuthorizationState.NoAuth;
        state.user = null;
      })
      .addCase(loginAction.pending, (state) => {
        state.signingInState = SignInState.SigningIn;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationState = AuthorizationState.Auth;
        state.signingInState = SignInState.SignedIn;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationState = AuthorizationState.NoAuth;
        state.user = null;
        toast.error('Authification error!');
      })

      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationState = AuthorizationState.NoAuth;
        state.user = null;
      })
      .addCase(logoutAction.rejected, () => {
        toast.error('Logout error!');
      });
  }
});
