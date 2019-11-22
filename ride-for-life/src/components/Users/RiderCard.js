import React from 'react'

import { connect } from 'react-redux'


const RiderCard = (props) => {
    //presentational component only

    const rider = props.rider
    console.log(props.rider)

    return (
        <div className ="rider-card">
            <h3>{rider.name}</h3>
            <p>Username: {rider.username}</p>
            <p>Location: {rider.location}</p>
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