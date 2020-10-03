import { createReducer } from 'typesafe-actions';
import {
  ACCEPT_FRIEND_FAILURE,
  ACCEPT_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  ADD_FRIEND_SUCCESS,
  FIND_USERS_FAILURE,
  FIND_USERS_SUCCESS,
  LOAD_FRIENDS_FAILURE,
  LOAD_FRIENDS_SUCCESS,
  REMOVE_FRIEND_FAILURE,
  REMOVE_FRIEND_SUCCESS,
} from './actions';
import { UserAction, UserState } from './types';

const initialState: UserState = {
  friends: [],
  recommanded: [],
  searchResult: [],
  userError: null,
};

const userReducer = createReducer<UserState, UserAction>(initialState, {
  [LOAD_FRIENDS_FAILURE]: (state, { payload: userError }) => ({ ...state, userError }),
  [FIND_USERS_FAILURE]: (state, { payload: userError }) => ({ ...state, userError }),
  [ADD_FRIEND_FAILURE]: (state, { payload: userError }) => ({ ...state, userError }),
  [ACCEPT_FRIEND_FAILURE]: (state, { payload: userError }) => ({ ...state, userError }),
  [REMOVE_FRIEND_FAILURE]: (state, { payload: userError }) => ({ ...state, userError }),
  [LOAD_FRIENDS_SUCCESS]: (state, { payload: { data } }) => ({ ...state, ...data, userError: null }),
  [FIND_USERS_SUCCESS]: (state, { payload: { data: searchResult } }) => ({ ...state, searchResult, userError: null }),
  [ADD_FRIEND_SUCCESS]: (state, { payload: { data } }) => {
    const newFriends = state.friends.concat(data).sort((a, b) => (a.username > b.username ? 1 : -1));
    return { ...state, friends: newFriends, userError: null };
  },
  [ACCEPT_FRIEND_SUCCESS]: (state, { payload: { data } }) => {
    const newRecomanded = state.recommanded.filter(user => user._id !== data._id);
    const newFriends = state.friends.concat(data).sort((a, b) => (a.username > b.username ? 1 : -1));
    return { ...state, friends: newFriends, recommanded: newRecomanded, userError: null };
  },
  [REMOVE_FRIEND_SUCCESS]: (state, { payload: { data } }) => {
    const newFriends = state.friends.filter(user => user._id !== data._id);
    return { ...state, friends: newFriends, userError: null };
  },
});

export default userReducer;
