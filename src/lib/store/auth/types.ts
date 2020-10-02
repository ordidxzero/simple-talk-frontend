import { AxiosError } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';
import { LoadingAction } from '../loading';
import * as actions from './actions';
import { RootState } from '..';

export type AuthResponse = {
  _id: string;
  username: string;
};

export type ThunkReturnType = ThunkAction<void, RootState, null, AuthAction | LoadingAction>;

export type AuthAction = ActionType<typeof actions>;

export type AuthState = {
  auth: AuthResponse | null;
  authError: AxiosError | null;
};
