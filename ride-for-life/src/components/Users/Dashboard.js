import React from 'react'

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
    console.log(props)
    const loggedIn = props.loggedIn
    console.log(loggedIn)
    //we want to have conditional rendering in the Dashboard. If the 

    if (loggedIn && props.user.role_id === 2) {
        return(
            <div>
                <h1> Welcome to the Driver dashboard. </h1>
                <Driver />
            </div>
        )
    }
    
    if(loggedIn && props.user.role_id === 3) {
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