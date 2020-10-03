import { finishLoading, startLoading } from '../loading';
import { acceptFriendAsync, addFriendAsync, findUsersAsync, loadFriendsAsync, removeFriendAsync } from './actions';
import { UserThunkReturnType } from './types';
import * as userAPI from '../../api/user';

export const loadFriendsThunk = (): UserThunkReturnType => {
  return async dispatch => {
    const { request, success, failure } = loadFriendsAsync;
    dispatch(startLoading('loadFriends'));
    dispatch(request());
    try {
      const response = await userAPI.loadFriends();
      dispatch(success(response));
    } catch (e) {
      dispatch(failure(e));
    } finally {
      dispatch(finishLoading('loadFriends'));
    }
  };
};

export const findUsersThunk = (query: string): UserThunkReturnType => {
  return async dispatch => {
    const { request, success, failure } = findUsersAsync;
    dispatch(startLoading('findUsers'));
    dispatch(request());
    try {
      const response = await userAPI.find(query);
      dispatch(success(response));
    } catch (e) {
      dispatch(failure(e));
    } finally {
      dispatch(finishLoading('findUsers'));
    }
  };
};

export const addFriendThunk = (id: string): UserThunkReturnType => {
  return async dispatch => {
    const { request, success, failure } = addFriendAsync;
    dispatch(startLoading('addFriend'));
    dispatch(request());
    try {
      const response = await userAPI.addFriend(id);
      dispatch(success(response));
    } catch (e) {
      dispatch(failure(e));
    } finally {
      dispatch(finishLoading('addFriend'));
    }
  };
};

export const acceptFriendThunk = (id: string): UserThunkReturnType => {
  return async dispatch => {
    const { request, success, failure } = acceptFriendAsync;
    dispatch(startLoading('acceptFriend'));
    dispatch(request());
    try {
      const response = await userAPI.acceptFriend(id);
      dispatch(success(response));
    } catch (e) {
      dispatch(failure(e));
    } finally {
      dispatch(finishLoading('acceptFriend'));
    }
  };
};

export const removeFriendThunk = (type: 'friends' | 'recommanded', id: string): UserThunkReturnType => {
  return async dispatch => {
    const { request, success, failure } = removeFriendAsync;
    dispatch(startLoading('removeFriend'));
    dispatch(request());
    try {
      const response = await userAPI.removeFriend(id);
      dispatch(success({ type, response }));
    } catch (e) {
      dispatch(failure(e));
    } finally {
      dispatch(finishLoading('removeFriend'));
    }
  };
};
