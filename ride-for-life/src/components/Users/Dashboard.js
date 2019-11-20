import React, { useEffect } from 'react'

//component imports
import Driver from './Driver'
import Rider from './Rider'

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

    console.log(props)
    console.log(props.user.role_id)
    console.log(loggedIn)

    
    if (loggedIn && driver) {
        return(
            <div>
                <h1> Welcome to the Driver dashboard. </h1>
                <Driver />
            </div>
        )
    }
    
    if(loggedIn && rider) {
        return(
            <div>
                <h1> Welcome to the Rider dashboard. </h1>
                <Rider />
            </div>
        )
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