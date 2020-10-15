import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type InputAction = ActionType<typeof actions>;

export type InputState = {
  username: string;
  password: string;
  passwordConfirm: string;
  search: string;
  chat: string;
};

export type ChangeTextPayload = { key: string; value: string };
