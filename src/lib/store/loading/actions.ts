import { createAction } from 'typesafe-actions';
import { FinishLoadingPayload, StartLoadingPayload } from './types';

export const START_LOADING = 'loading/START_LOADING';
export const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(START_LOADING)<StartLoadingPayload>();
export const finishLoading = createAction(FINISH_LOADING)<FinishLoadingPayload>();
