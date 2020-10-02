import { createAction } from 'typesafe-actions';
import { ChangeTextPayload } from './types';

export const CHANGE_TEXT = 'input/CHANGE_TEXT';
export const INITIALIZE_FORM = 'input/INITIALIZE_FORM';

export const changeText = createAction(CHANGE_TEXT)<ChangeTextPayload>();
export const initializeForm = createAction(INITIALIZE_FORM)();
