import { AppDispatch, AppState } from './state-type';
import { AxiosInstance } from 'axios';

export type ApiActionType = {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
};

