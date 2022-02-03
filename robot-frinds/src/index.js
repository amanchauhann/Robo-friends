import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Second from './Second';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Second greeting={'hello' + 'my name is aman'} />
    <link rel="stylesheet" href="https://npmcdn.com/tachyons@4.0.0-beta.35/css/tachyons.min.css"></link>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
