import { AxiosError, AxiosResponse } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { AuthResponse } from './types';

export const TEMP_SET_USER = 'auth/TEMP_SET_USER';

export const REGISTER_REQUEST = 'auth/REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

export const tempSetUser = createAction(TEMP_SET_USER)<AuthResponse>();
export const loginAsync = createAsyncAction(LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE)<
  void,
  AxiosResponse<AuthResponse>,
  AxiosError
>();
export const registerAsync = createAsyncAction(REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE)<
  void,
  AxiosResponse<AuthResponse>,
  AxiosError
>();
