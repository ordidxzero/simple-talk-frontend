import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';
import ReduxProvider from './lib/store';

ReactDOM.render(
  <>
    <GlobalStyles />
    <ReduxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </>,
  document.getElementById('root'),
);
