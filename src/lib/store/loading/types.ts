import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LoadingAction = ActionType<typeof actions>;

export type LoadingState = { login: boolean; register: boolean };

export type StartLoadingPayload = keyof LoadingState;
export type FinishLoadingPayload = keyof LoadingState;
