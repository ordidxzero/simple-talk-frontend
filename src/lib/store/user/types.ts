import { ThunkAction } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';
import { UserResponse } from '../../../@types';
import { LoadingAction } from '../loading';
import * as actions from './actions';
import { RootState } from '..';
import { AxiosError } from 'axios';

export type LoadFriendsResponse = {
  friends: UserResponse[];
  recommanded: UserResponse[];
};

export type UserThunkReturnType = ThunkAction<void, RootState, null, UserAction | LoadingAction>;

export type UserAction = ActionType<typeof actions>;

export type UserState = {
  friends: UserResponse[];
  recommanded: UserResponse[];
  searchResult: UserResponse[];
  userError: AxiosError | null;
};
