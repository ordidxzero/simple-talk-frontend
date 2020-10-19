import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk, logoutThunk, registerThunk } from '../../lib/store/auth';
import { loadRoomsThunk, startChatThunk } from '../../lib/store/chat';
import { changeText as changeTextAction, initializeForm as initializeFormAction } from '../../lib/store/input';
import { resetSearchResult as resetSearchResultAction } from '../../lib/store/user';
import {
  acceptFriendThunk,
  addFriendThunk,
  findUsersThunk,
  loadFriendsThunk,
  removeFriendThunk,
} from '../../lib/store/user/thunks';

function useReduxAction() {
  const dispatch = useDispatch();

  const logout = useCallback(() => dispatch(logoutThunk()), [dispatch]);
  const initializeForm = useCallback(() => dispatch(initializeFormAction()), [dispatch]);
  const login = useCallback((data: { username: string; password: string }) => dispatch(loginThunk(data)), [dispatch]);
  const register = useCallback((data: { username: string; password: string }) => dispatch(registerThunk(data)), [
    dispatch,
  ]);
  const changeText = useCallback((data: { key: string; value: string }) => dispatch(changeTextAction(data)), [
    dispatch,
  ]);

  const loadFriends = useCallback(() => dispatch(loadFriendsThunk()), [dispatch]);
  const loadRooms = useCallback(() => dispatch(loadRoomsThunk()), [dispatch]);

  const resetSearchResult = useCallback(() => dispatch(resetSearchResultAction()), [dispatch]);
  const findUsers = useCallback((search: string) => dispatch(findUsersThunk(search)), [dispatch]);

  const startChat = useCallback((id: string) => dispatch(startChatThunk(id)), [dispatch]);
  const addFriend = useCallback((id: string) => dispatch(addFriendThunk(id)), [dispatch]);
  const acceptFriend = useCallback((id: string) => dispatch(acceptFriendThunk(id)), [dispatch]);
  const removeFriend = useCallback(
    (type: 'friends' | 'recommanded', id: string) => dispatch(removeFriendThunk(type, id)),
    [dispatch],
  );

  return {
    login,
    logout,
    register,
    changeText,
    initializeForm,
    acceptFriend,
    addFriend,
    resetSearchResult,
    findUsers,
    removeFriend,
    startChat,
    loadFriends,
    loadRooms,
  };
}

export default useReduxAction;
