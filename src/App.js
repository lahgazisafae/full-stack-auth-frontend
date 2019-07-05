import React from 'react';
import Login from './Login';
import Profile from './Profile';
import Navbar from './Navbar';
import {Route} from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div >
      <Navbar /> 
      <Login />
      {localStorage.getItem('token') === null ? <h1>You are not Logged in!</h1>: <Route path="/profile" component={Profile}></Route> }
    </div>
  );
}

export default App;
