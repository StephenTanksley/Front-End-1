import React from 'react';

//routing and api - this may have all moved into the Signup/Login/PrivateRoute components.
import { Route, Redirect, Link } from 'react-router-dom'
import { axiosWithAuth as axios } from './utils/api'

//component imports
import DriverSignup from './components/Login - Logout - Signup - PrivateRoute/DriverSignup';
import Login from './components/Login - Logout - Signup - PrivateRoute/Login'
import Logout from './components/Login - Logout - Signup - PrivateRoute/Logout'
import PrivateRoute from './components/Login - Logout - Signup - PrivateRoute/PrivateRoute'

//navigation
import Nav from './components/Navigation/Nav'
import Dashboard from './components/Users/Dashboard'

function App() {
  return (
    <div className="App">
      <h1>Hello. Welcome to Ride for Life.</h1>
      <DriverSignup />
      {/* <Login /> */}
    </div>
    
  );
}

export default App;