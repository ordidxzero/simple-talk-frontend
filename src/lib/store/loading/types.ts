import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LoadingAction = ActionType<typeof actions>;

export type LoadingState = {
  login: boolean;
  register: boolean;
  check: boolean;
  logout: boolean;
  loadFriends: boolean;
  loadRooms: boolean;
  findUsers: boolean;
  addFriend: boolean;
  acceptFriend: boolean;
  removeFriend: boolean;
  startChat: boolean;
  leaveChat: boolean;
};

export type StartLoadingPayload = keyof LoadingState;
export type FinishLoadingPayload = keyof LoadingState;
