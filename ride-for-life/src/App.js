import React, { useState, useEffect } from 'react';

//routing and api - this may have all moved into the Signup/Login/PrivateRoute components.
import { Route } from 'react-router-dom'
// import {Button} from 'reactstrap'

import { connect } from 'react-redux'

import logo from "./RFLlogo.svg"
import "./App.css"

//component imports
import DriverSignup from './components/Login - Logout - Signup - PrivateRoute/DriverSignup'
import RiderSignup from './components/Login - Logout - Signup - PrivateRoute/RiderSignup'
import Login from './components/Login - Logout - Signup - PrivateRoute/Login'
import Logout from './components/Login - Logout - Signup - PrivateRoute/Logout'
import PrivateRoute from './components/Login - Logout - Signup - PrivateRoute/PrivateRoute'

//navigation
import Nav from './components/Navigation/Nav'
import Dashboard from './components/Users/Dashboard'

function App(props) {

  const loggedIn = props.loggedIn

  return (
    <div className="App">

      <Nav />
      {/* <h1>Hello. Welcome to Ride for Life.</h1> */}

      <div className="landing-page">
        <img className={loggedIn ? "hidden" : `landing-logo`} src={logo}/>

        <PrivateRoute exact path='/dashboard' component={Dashboard} />

        <Route exact path='/driver-signup' component={DriverSignup} />
        <Route exact path='/rider-signup' component={RiderSignup} />

        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />

        <p className={loggedIn ? "hidden" : "pitch"}>
          Ride For Life serves mothers in Uganda to improve maternal and child survival. One of the biggest obstacles women face while pregnant is getting to a 
          health facility to safely deliver. Most people do not own a car or a motorcycle, and a majority live greater than 5 km from a health center 
          (an hour by foot). Ride For Life provides a solution by quickly dispatching motorcycle ambulances to women in need of urgent medical care. 
          By quickly providing transportation to qualified medical care, Ride For Life hopes to address issues of mortality and pregnancy complications in Uganda.
        </p>

      </div>


      {/* 
        //We don't need to see these components in the final app, just for getting them working.
        //We will need the routes active, though, so we can leave those as they are.

      */}

    {/* <Link to={'/driver-signup'} > <Button color='secondary'>Driver Signup</Button> </Link>
    <Link to={'/rider-signup'} > <Button color='secondary'>Rider Signup</Button> </Link>  */}

    {/* <RidersList /> */}

    </div>
    
  );
}

const mapStateToProps = state => {
    return {
    user: state.user,
    loggedIn: state.loggedIn
  }
}

export default connect(
  mapStateToProps,
  null
)(App)