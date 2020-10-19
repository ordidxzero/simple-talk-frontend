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

  const logout = () => dispatch(logoutThunk());
  const initializeForm = () => dispatch(initializeFormAction());
  const login = (data: { username: string; password: string }) => dispatch(loginThunk(data));
  const register = (data: { username: string; password: string }) => dispatch(registerThunk(data));
  const changeText = (data: { key: string; value: string }) => dispatch(changeTextAction(data));

  const loadFriends = () => dispatch(loadFriendsThunk());
  const loadRooms = () => dispatch(loadRoomsThunk());

  const resetSearchResult = () => dispatch(resetSearchResultAction());
  const findUsers = (search: string) => dispatch(findUsersThunk(search));

  const startChat = (id: string) => dispatch(startChatThunk(id));
  const addFriend = (id: string) => dispatch(addFriendThunk(id));
  const acceptFriend = (id: string) => dispatch(acceptFriendThunk(id));
  const removeFriend = (type: 'friends' | 'recommanded', id: string) => dispatch(removeFriendThunk(type, id));

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
