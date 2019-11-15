import React from 'react';

//
import { Route, Redirect, Link } from 'react-router-dom'
import { axiosWithAuth as axios } from './utils/api'
import './App.css';

//component imports
import Signup from './components/Login - Logout - Signup - PrivateRoute/Signup';
import Login from './components/Login - Logout - Signup - PrivateRoute/Login'
import Logout from './components/Login - Logout - Signup - PrivateRoute/Logout'
import PrivateRoute from './components/Login - Logout - Signup - PrivateRoute/PrivateRoute'


function App() {


  return (
    <div className="App">
     <h1>Hello. Welcome to Ride for Life.</h1>
     <Signup />
    </div>
    
  );
}

export default App;