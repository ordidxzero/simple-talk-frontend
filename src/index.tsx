import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import GlobalStyles from './GlobalStyles';
import Wrapper from './lib/store';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Wrapper>
      <App />
    </Wrapper>
  </>,
  document.getElementById('root'),
);
