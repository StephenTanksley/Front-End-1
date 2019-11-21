import React, { useEffect } from 'react'
import {Route, Redirect} from 'react-router-dom'

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
    console.log('logged in?', loggedIn)
    
    const driverRole = (props.user.role === 'driver');
    console.log('driver', driverRole)

    const riderRole = (props.user.role === 'rider');
    console.log('rider', riderRole)
    
    console.log('Dashboard props', props)


    switch(loggedIn, driverRole, riderRole, props) {
        case (driverRole && loggedIn):
            return (
                <div>
                    <Logout />
                    <h1> Welcome to the Driver dashboard. </h1>
                    {console.log('hello from the driver component')}
                    <Driver />
                </div>
            )

        case (riderRole && loggedIn):
            return (
                <div>
                    <Logout />
                    <h1> Welcome to the Rider dashboard. </h1>
                    {console.log('hello from the rider component')}
                    <Rider />
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