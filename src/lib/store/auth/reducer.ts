import { createReducer } from 'typesafe-actions';
import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from './actions';
import { AuthAction, AuthState } from './types';

const initialState: AuthState = {
  auth: null,
  authError: null,
};

const authReducer = createReducer<AuthState, AuthAction>(initialState, {
  [REGISTER_SUCCESS]: (state, { payload: { data: auth } }) => ({ ...state, auth }),
  [REGISTER_FAILURE]: (state, { payload: authError }) => ({ ...state, authError }),
  [LOGIN_SUCCESS]: (state, { payload: { data: auth } }) => ({ ...state, auth }),
  [LOGIN_FAILURE]: (state, { payload: authError }) => ({ ...state, authError }),
});

export default authReducer;
