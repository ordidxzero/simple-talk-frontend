import { createAction, createAsyncAction } from 'typesafe-actions';
import { AddMessagePayload, LoadRoomsResponse, StartChatResponse, AxiosError } from './types';

export const ADD_MESSAGE = 'chat/ADD_MESSAGE';

export const START_CHAT_REQUEST = 'chat/START_CHAT_REQUEST';
export const START_CHAT_SUCCESS = 'chat/START_CHAT_SUCCESS';
export const START_CHAT_FAILURE = 'chat/START_CHAT_FAILURE';

export const LOAD_ROOMS_REQUEST = 'user/LOAD_ROOMS_REQUEST';
export const LOAD_ROOMS_SUCCESS = 'user/LOAD_ROOMS_SUCCESS';
export const LOAD_ROOMS_FAILURE = 'user/LOAD_ROOMS_FAILURE';

export const addMessage = createAction(ADD_MESSAGE)<AddMessagePayload>();

export const startChatAsync = createAsyncAction(START_CHAT_REQUEST, START_CHAT_SUCCESS, START_CHAT_FAILURE)<
  void,
  StartChatResponse,
  AxiosError
>();

export const loadRoomsAsync = createAsyncAction(LOAD_ROOMS_REQUEST, LOAD_ROOMS_SUCCESS, LOAD_ROOMS_FAILURE)<
  void,
  LoadRoomsResponse,
  AxiosError
>();
