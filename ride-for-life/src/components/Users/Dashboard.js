import React from 'react'
import Driver from './Driver'
import Rider from './Rider'

import { 

    //rider
    UpdateRider,
    DeleteRider,

    //driver
    UpdateDriver,
    DeleteDriver 
} from '../State/actions/actions';

import { connect } from 'react-redux'


const Dashboard = (props) => {
    console.log(props)
    //we want to have conditional rendering in the Dashboard. If the 

    return(
        <div>
            <h1>Dashboard</h1>
        </div>
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