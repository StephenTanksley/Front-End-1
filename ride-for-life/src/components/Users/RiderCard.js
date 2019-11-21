import React from 'react'

import { connect } from 'react-redux'


const RiderCard = (props) => {
    //presentational component only

    console.log(props)

    return (
        <div className ="rider-card">
            <h3>{props.rider.name}</h3>
            <p>Username: {props.rider.username}</p>
            <p>Location: {props.rider.location}</p>
        </div>
    )
}


const mapStateToProps = state => {
        return {
        riders: state.riders
    }
}

export default connect(
mapStateToProps,
null
)(RiderCard)