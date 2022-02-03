import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Second from './Second';
import Card from './Card';
import { RobotList } from './RobotList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Card id={RobotList[0].id} name={RobotList[0].name} email={RobotList[0].email} />
    <Card id={RobotList[1].id} name={RobotList[1].name} email={RobotList[1].email} />
    <Card id={RobotList[2].id} name={RobotList[2].name} email={RobotList[2].email} />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css" integrity="sha512-d0v474klOFSF7qD9WDvyRxAvXaWSxCHDZdnBSZQjo8BpVr6vpjwAgqetpqkKP38DzlOzdVPaLVnzzW1Ba8wB9w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
