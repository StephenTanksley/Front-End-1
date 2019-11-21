import React, { useEffect } from 'react'
import {Route} from 'react-router-dom'

//component imports
import Driver from './Driver'
import Rider from './Rider'
import Logout from '../Login - Logout - Signup - PrivateRoute/Logout'
import PrivateRoute from '../Login - Logout - Signup - PrivateRoute/PrivateRoute'

//redux connection
import { connect } from 'react-redux'

import { 

    //rider
    UpdateRider,
    DeleteRider,

    //driver
    UpdateDriver,
    DeleteDriver 
} from '../State/actions/actions';



const Dashboard = (props) => {

    //checking adding components together. Must be logged in and a driver/rider.
    const loggedIn = props.loggedIn;
    const driver = props.user.role_id === 2;
    const rider = props.user.role_id === 3;

    console.log('Dashboard props', props)

    switch(loggedIn, driver, rider) {
        case (driver && loggedIn):
            return (
                <div>
                    <Route exact path='/logout' component={Logout} />
                    <h1> Welcome to the Driver dashboard. </h1>
                    {console.log('hello from the driver component')}
                    <PrivateRoute exact path='/driver' component={Driver} />
                </div>
            )

        case (rider && loggedIn):
            return (
                <div>
                    <Route exact path='/logout' component={Logout} />
                    <h1> Welcome to the Rider dashboard. </h1>
                    <PrivateRoute exact path='/rider' component={Rider} />
                </div>
            )

        default:
            return null;
    }

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
)(Dashboard)