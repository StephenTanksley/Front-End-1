import React from 'react'

import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

import { connect } from 'react-redux'


const RiderCard = (props) => {
    //presentational component only

    const rider = props.rider
    console.log(props.rider)

    return (
        <div className ="user-card">
          <Card className='user-cards'>
            <CardBody className="card-body">
              <CardTitle tag='h2'>{rider.name}</CardTitle>
              <CardSubtitle>Location: {rider.location}</CardSubtitle>
            </CardBody>
          </Card>
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