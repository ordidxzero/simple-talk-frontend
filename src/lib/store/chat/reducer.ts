import { createReducer } from 'typesafe-actions';
import { ADD_MESSAGE, LOAD_ROOMS_FAILURE, LOAD_ROOMS_SUCCESS, START_CHAT_FAILURE, START_CHAT_SUCCESS } from './actions';
import { ChatAction, ChatState } from './types';

const initialState: ChatState = {
  rooms: [],
  chatError: null,
};

const inputReducer = createReducer<ChatState, ChatAction>(initialState, {
  [START_CHAT_SUCCESS]: (state, { payload: { data } }) => ({ ...state, rooms: state.rooms.concat(data) }),
  [START_CHAT_FAILURE]: (state, { payload: chatError }) => ({ ...state, chatError }),
  [LOAD_ROOMS_SUCCESS]: (state, { payload: { data: rooms } }) => ({ ...state, rooms }),
  [LOAD_ROOMS_FAILURE]: (state, { payload: chatError }) => ({ ...state, chatError }),
  [ADD_MESSAGE]: (state, { payload: { room, data } }) => {
    const newRooms = state.rooms.map(r => {
      if (r._id !== room) return r;
      const newMessages = r.messages.concat(data);
      return { ...r, messages: newMessages };
    });
    return { ...state, rooms: newRooms };
  },
});

export default inputReducer;
