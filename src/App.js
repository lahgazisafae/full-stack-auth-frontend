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
      
    </div>
  );
}

export default App;
