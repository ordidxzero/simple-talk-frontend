import { createReducer } from 'typesafe-actions';
import { FINISH_LOADING, START_LOADING } from './actions';
import { LoadingAction, LoadingState } from './types';

const initialState: LoadingState = {
  login: false,
  register: false,
  check: false,
  logout: false,
  loadFriends: false,
  loadRooms: false,
  findUsers: false,
  addFriend: false,
  acceptFriend: false,
  removeFriend: false,
  startChat: false,
  leaveChat: false,
};

const loadingReducer = createReducer<LoadingState, LoadingAction>(initialState, {
  [START_LOADING]: (state, { payload }) => ({ ...state, [payload]: true }),
  [FINISH_LOADING]: (state, { payload }) => ({ ...state, [payload]: false }),
});

export default loadingReducer;
