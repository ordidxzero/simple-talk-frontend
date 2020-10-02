import React from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import input from './input';
import loading from './loading';
import auth from './auth';

const rootReducer = combineReducers({ input, loading, auth });

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const ReduxProvider = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
