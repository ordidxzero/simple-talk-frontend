import { AxiosError } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';
import { AuthResponse } from '../../../@types';
import { LoadingAction } from '../loading';
import * as actions from './actions';
import { RootState } from '..';
import { ExtraArgsType } from '../chat';

export type AuthThunkReturnType = ThunkAction<void, RootState, null, AuthAction | LoadingAction>;

export type CheckThunkReturnType = ThunkAction<void, {}, ExtraArgsType, AuthAction | LoadingAction>;

export type AuthAction = ActionType<typeof actions>;

export type AuthState = {
  auth: AuthResponse | null;
  authError: AxiosError | null;
};
