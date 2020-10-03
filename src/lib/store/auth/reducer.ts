import { createReducer } from 'typesafe-actions';
import {
  CHECK_FAILURE,
  CHECK_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  TEMP_SET_USER,
} from './actions';
import { AuthAction, AuthState } from './types';

const initialState: AuthState = {
  auth: null,
  authError: null,
};

const authReducer = createReducer<AuthState, AuthAction>(initialState, {
  [TEMP_SET_USER]: (state, { payload: auth }) => ({ ...state, auth }),
  [LOGOUT]: state => ({ ...state, auth: null, authError: null }),
  [REGISTER_SUCCESS]: (state, { payload: { data: auth } }) => ({ ...state, auth, authError: null }),
  [REGISTER_FAILURE]: (state, { payload: authError }) => ({ ...state, authError }),
  [LOGIN_SUCCESS]: (state, { payload: { data: auth } }) => ({ ...state, auth, authError: null }),
  [LOGIN_FAILURE]: (state, { payload: authError }) => ({ ...state, authError }),
  [CHECK_SUCCESS]: (state, { payload: { data: auth } }) => ({ ...state, auth, authError: null }),
  [CHECK_FAILURE]: (state, { payload: authError }) => ({ ...state, authError }),
});

export default authReducer;
