import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route component={HomePage} path={['/', '/chat/:roomId']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
    </Switch>
  );
}

export default App;
