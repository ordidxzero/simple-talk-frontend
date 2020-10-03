import { checkAsync, loginAsync, logout, registerAsync } from './actions';
import { AuthThunkReturnType } from './types';
import { AuthThunkParams } from '../../../@types';
import * as authAPI from '../../api/auth';
import { finishLoading, startLoading } from '../loading';

export const loginThunk = (data: AuthThunkParams): AuthThunkReturnType => {
  return async dispatch => {
    const { request, success, failure } = loginAsync;
    dispatch(startLoading('login'));
    dispatch(request());
    try {
      const response = await authAPI.login(data);
      dispatch(success(response));
    } catch (e) {
      dispatch(failure(e));
    } finally {
      dispatch(finishLoading('login'));
    }
  };
};

export const registerThunk = (data: AuthThunkParams): AuthThunkReturnType => {
  return async dispatch => {
    const { request, success, failure } = registerAsync;
    dispatch(startLoading('register'));
    dispatch(request());
    try {
      const response = await authAPI.register(data);
      dispatch(success(response));
    } catch (e) {
      dispatch(failure(e));
    } finally {
      dispatch(finishLoading('register'));
    }
  };
};

export const checkThunk = (): AuthThunkReturnType => {
  return async dispatch => {
    const { request, success, failure } = checkAsync;
    dispatch(startLoading('check'));
    dispatch(request());
    try {
      const response = await authAPI.check();
      dispatch(success(response));
    } catch (e) {
      dispatch(failure(e));
      localStorage.removeItem('simple_talk_auth');
    } finally {
      dispatch(finishLoading('check'));
    }
  };
};

export const logoutThunk = (): AuthThunkReturnType => {
  return async dispatch => {
    dispatch(startLoading('logout'));
    await authAPI.logout();
    dispatch(logout());
    localStorage.removeItem('simple_talk_auth');
    dispatch(finishLoading('logout'));
  };
};
