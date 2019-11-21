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
    console.log('Dashboard props', props)

    //checking adding components together. Must be logged in and a driver/rider.
    // const loggedIn = props.loggedIn;
    console.log('logged in?', loggedIn)
    
    const driverRole = (props.user.role === 'driver');
    console.log('driver', driverRole)

    const riderRole = (props.user.role === 'rider');
    console.log('rider', riderRole)
    
    // return (
        // <div>
        //     <PrivateRoute
        //         exact
        //         path='/dashboard'
        //         component={loggedIn && riderRole ? Rider : Driver} 
        //         />

        //         {/* <RidersList /> */}

        //     {/* <PrivateRoute
        //         exact
        //         path='/drivers'
        //         component={DriversList}
        //         />
        //     <PrivateRoute
        //         exact
        //         path='/drivers/:id'
        //         component={DriverProfile}
        //         />
        //     <PrivateRoute 
        //         exact 
        //         path='/riders' 
        //         component={RidersList} 
        //         />

        //     <PrivateRoute
        //         exact
        //         path='/riders/:id'
        //         component={RiderProfile}
        //         /> */}
        // </div>     
    // )



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