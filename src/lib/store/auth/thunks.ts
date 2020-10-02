import { loginAsync, registerAsync } from './actions';
import { ThunkReturnType } from './types';
import { AuthThunkParams } from '../../../@types';
import * as authAPI from '../../api/auth';
import { finishLoading, startLoading } from '../loading';

export const loginThunk = ({ type, ...data }: AuthThunkParams): ThunkReturnType => {
  return async dispatch => {
    const { request, success, failure } = loginAsync;
    dispatch(startLoading(type));
    dispatch(request());
    try {
      const response = await authAPI.login(data);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure(e));
      dispatch(finishLoading(type));
    }
  };
};

export const registerThunk = ({ type, ...data }: AuthThunkParams): ThunkReturnType => {
  return async dispatch => {
    const { request, success, failure } = registerAsync;
    dispatch(startLoading(type));
    dispatch(request());
    try {
      const response = await authAPI.register(data);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure(e));
      dispatch(finishLoading(type));
    }
  };
};
