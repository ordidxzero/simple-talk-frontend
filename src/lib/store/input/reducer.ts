import { createReducer } from 'typesafe-actions';
import { CHANGE_TEXT, INITIALIZE_FORM } from './actions';
import { InputAction, InputState } from './types';

const initialState: InputState = {
  username: '',
  password: '',
  passwordConfirm: '',
  search: '',
  chat: '',
};

const inputReducer = createReducer<InputState, InputAction>(initialState, {
  [CHANGE_TEXT]: (state, { payload: { key, value } }) => ({ ...state, [key]: value }),
  [INITIALIZE_FORM]: () => initialState,
});

export default inputReducer;
