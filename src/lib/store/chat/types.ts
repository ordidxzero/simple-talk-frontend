import { AxiosError as Error, AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';
import { History } from 'history';
import { RootState } from '..';
import { MessageData, UserResponse } from '../../../@types';
import { LoadingAction } from '../loading';
import * as actions from './actions';

export type ChatAction = ActionType<typeof actions>;

export type ChatState = {
  rooms: RoomData[];
  chatError: AxiosError | null;
};

export type RoomData = {
  _id: string;
  participants: UserResponse[];
  messages: MessageData[];
};

export type ExtraArgsType = {
  history: History<unknown>;
};

export type ChatThunkReturnType = ThunkAction<void, RootState, ExtraArgsType, ChatAction | LoadingAction>;

export type AddMessagePayload = {
  room: string;
  data: MessageData;
};

export type AxiosError = Error;

export type StartChatResponse = AxiosResponse<RoomData>;

export type LoadRoomsResponse = AxiosResponse<RoomData[]>;
