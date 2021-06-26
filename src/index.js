import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SignUp, SignIn, MockDashboard } from './views';
import { AuthProvider } from './contexts/AuthContext.js';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <AuthProvider>
          <PrivateRoute exact path="/" component={MockDashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </AuthProvider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
