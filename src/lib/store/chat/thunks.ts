import * as chatAPI from '../../api/chat';
import { joinRoom } from '../../api/socket';
import * as userAPI from '../../api/user';
import { finishLoading, startLoading } from '../loading';
import { loadRoomsAsync, startChatAsync } from './actions';
import { AxiosError, ChatThunkReturnType } from './types';

export const startChatThunk = (opponent: string): ChatThunkReturnType => {
  return async (dispatch, _, { history }) => {
    const { request, success, failure } = startChatAsync;
    dispatch(startLoading('startChat'));
    dispatch(request());
    try {
      const response = await chatAPI.startChat(opponent);
      dispatch(success(response));
      joinRoom({ room: response.data._id, opponent });
      history.push(`/chat/${response.data._id}`);
    } catch (e) {
      const err: AxiosError = e;
      dispatch(failure(err));
      if (err.response?.statusText) {
        history.push(`/chat/${err.response?.statusText}`);
      }
    } finally {
      dispatch(finishLoading('startChat'));
    }
  };
};

export const loadRoomsThunk = (): ChatThunkReturnType => {
  return async dispatch => {
    const { request, success, failure } = loadRoomsAsync;
    dispatch(startLoading('loadFriends'));
    dispatch(request());
    try {
      const response = await userAPI.loadRooms();
      dispatch(success(response));
    } catch (e) {
      dispatch(failure(e));
    } finally {
      dispatch(finishLoading('loadFriends'));
    }
  };
};
