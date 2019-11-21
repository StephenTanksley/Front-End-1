import React from 'react';

//routing and api - this may have all moved into the Signup/Login/PrivateRoute components.
import { Route, Redirect, Link } from 'react-router-dom'
import {Button} from 'reactstrap'

import { connect } from 'react-redux'

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
  console.log(props)

  return (
    <div className="App">

      <Nav />

      <h1>Hello. Welcome to Ride for Life.</h1>


      {/* 
        //We don't need to see these components in the final app, just for getting them working.
        //We will need the routes active, though, so we can leave those as they are.

      */}

    {/* <Link to={'/driver-signup'} > <Button color='secondary'>Driver Signup</Button> </Link>
    <Link to={'/rider-signup'} > <Button color='secondary'>Rider Signup</Button> </Link>  */}


      <Route exact path='/dashboard' component={Dashboard} />

      <Route exact path='/driver-signup' component={DriverSignup} />
      <Route exact path='/rider-signup' component={RiderSignup} />

      <Route exact path='/login' component={Login} />
      <Route exact path='/logout' component={Logout} />

    </div>
    
  );
}

const mapStateToProps = state => {
    return {
    user: state.user,
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)