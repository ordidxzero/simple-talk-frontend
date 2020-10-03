import React from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import input from './input';
import loading from './loading';
import user from './user';
import auth, { checkAsync, tempSetUser } from './auth';

const rootReducer = combineReducers({ input, loading, auth, user });

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

(function loadUser() {
  try {
    const user = localStorage.getItem('simple_talk_auth');
    if (!user) return;
    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(checkAsync.request());
  } catch {
    console.log('localStorage is not working');
  }
})();

const ReduxProvider = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
