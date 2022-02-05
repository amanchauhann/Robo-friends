import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Second from './Second';
// import Card from './Card';
// import { RobotList } from './RobotList';
// import Main from './Main';
import App from './Container/App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css" integrity="sha512-d0v474klOFSF7qD9WDvyRxAvXaWSxCHDZdnBSZQjo8BpVr6vpjwAgqetpqkKP38DzlOzdVPaLVnzzW1Ba8wB9w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
