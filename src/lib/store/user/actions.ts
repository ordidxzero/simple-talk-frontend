import { AxiosError, AxiosResponse } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { UserResponse } from '../../../@types';
import { LoadFriendsResponse } from './types';

export const LOAD_FRIENDS_REQUEST = 'user/LOAD_FRIENDS_REQUEST';
export const LOAD_FRIENDS_SUCCESS = 'user/LOAD_FRIENDS_SUCCESS';
export const LOAD_FRIENDS_FAILURE = 'user/LOAD_FRIENDS_FAILURE';

export const FIND_USERS_REQUEST = 'user/FIND_USERS_REQUEST';
export const FIND_USERS_SUCCESS = 'user/FIND_USERS_SUCCESS';
export const FIND_USERS_FAILURE = 'user/FIND_USERS_FAILURE';

export const ADD_FRIEND_REQUEST = 'user/ADD_FRIEND_REQUEST';
export const ADD_FRIEND_SUCCESS = 'user/ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'user/ADD_FRIEND_FAILURE';

export const ACCEPT_FRIEND_REQUEST = 'user/ACCEPT_FRIEND_REQUEST';
export const ACCEPT_FRIEND_SUCCESS = 'user/ACCEPT_FRIEND_SUCCESS';
export const ACCEPT_FRIEND_FAILURE = 'user/ACCEPT_FRIEND_FAILURE';

export const REMOVE_FRIEND_REQUEST = 'user/REMOVE_FRIEND_REQUEST';
export const REMOVE_FRIEND_SUCCESS = 'user/REMOVE_FRIEND_SUCCESS';
export const REMOVE_FRIEND_FAILURE = 'user/REMOVE_FRIEND_FAILURE';

export const loadFriendsAsync = createAsyncAction(LOAD_FRIENDS_REQUEST, LOAD_FRIENDS_SUCCESS, LOAD_FRIENDS_FAILURE)<
  void,
  AxiosResponse<LoadFriendsResponse>,
  AxiosError
>();

export const findUsersAsync = createAsyncAction(FIND_USERS_REQUEST, FIND_USERS_SUCCESS, FIND_USERS_FAILURE)<
  void,
  AxiosResponse<UserResponse[]>,
  AxiosError
>();

export const addFriendAsync = createAsyncAction(ADD_FRIEND_REQUEST, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE)<
  void,
  AxiosResponse<UserResponse>,
  AxiosError
>();

export const acceptFriendAsync = createAsyncAction(ACCEPT_FRIEND_REQUEST, ACCEPT_FRIEND_SUCCESS, ACCEPT_FRIEND_FAILURE)<
  void,
  AxiosResponse<UserResponse>,
  AxiosError
>();

export const removeFriendAsync = createAsyncAction(REMOVE_FRIEND_REQUEST, REMOVE_FRIEND_SUCCESS, REMOVE_FRIEND_FAILURE)<
  void,
  AxiosResponse<UserResponse>,
  AxiosError
>();
