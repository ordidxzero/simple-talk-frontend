import React from 'react';
import 'antd/dist/antd.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route component={HomePage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
    </Switch>
  );
}

export default App;
