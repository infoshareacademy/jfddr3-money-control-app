import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './views/SignIn/SignIn';
import reportWebVitals from './reportWebVitals';
import Dashboard from './views/Dashboard/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <SignIn />
    <Dashboard />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
