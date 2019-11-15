import React from 'react';

//routing and api - this may have all moved into the Signup/Login/PrivateRoute components.
import { Route, Redirect, Link } from 'react-router-dom'
import { axiosWithAuth as axios } from './utils/api'
import './App.css';

//component imports
import Signup from './components/Login - Logout - Signup - PrivateRoute/Signup';
import Login from './components/Login - Logout - Signup - PrivateRoute/Login'
import Logout from './components/Login - Logout - Signup - PrivateRoute/Logout'
import PrivateRoute from './components/Login - Logout - Signup - PrivateRoute/PrivateRoute'
import Nav from './components/Navigation/Nav'
import Dashboard from './components/Users/Dashboard'


function App() {
  return (
    <div className="App">
      <Nav />

      <h1>Hello. Welcome to Ride for Life.</h1>
      
      <div>
        <Signup />
        <Login />
     </div>
     <PrivateRoute exact path='/dashboard' component={Dashboard} />
     <PrivateRoute exact path='/logout' component={Logout} />
    </div>
    
  );
}

export default App;