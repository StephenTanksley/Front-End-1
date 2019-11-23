import React, { useEffect } from 'react'
import {Route, Redirect} from 'react-router-dom'

//component imports
import Driver from './Driver'
import Rider from './Rider'
import RidersList from './RidersList'
import Logout from '../Login - Logout - Signup - PrivateRoute/Logout'
import PrivateRoute from '../Login - Logout - Signup - PrivateRoute/PrivateRoute'

//redux connection
import { connect } from 'react-redux'
import { getToken } from '../../utils/api'


const Dashboard = (props) => {
    const loggedIn = getToken()
    console.log(props)
    // const loggedIn = props.loggedIn;
    
    //checking adding components together. Must be logged in and a driver/rider.
    console.log('logged in?', loggedIn)
    
    const driverRole = "driver";
    // console.log('driver', driverRole)

    const riderRole = "rider";
    // console.log('rider', riderRole)
    
    return (
        <>
            {loggedIn && (driverRole === props.user.role) ? <Driver /> : null}
            {loggedIn && (riderRole === props.user.role) ? <Rider /> : null}
        </>
    ) 
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