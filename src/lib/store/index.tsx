import React from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import auth, { checkThunk, tempSetUser } from './auth';
import input from './input';
import loading from './loading';
import user from './user';
import chat from './chat';

const rootReducer = combineReducers({ input, loading, auth, user, chat });

const customHistory = createBrowserHistory();

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk.withExtraArgument({ history: customHistory }))),
);

(function loadUser() {
  try {
    const user = localStorage.getItem('simple_talk_auth');
    if (!user) return;
    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(checkThunk());
  } catch {
    console.log('localStorage is not working');
  }
})();

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <Router history={customHistory}>
    <Provider store={store}>{children}</Provider>
  </Router>
);

export default Wrapper;
