import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';


//Redux import
import { connect } from 'react-redux'
import { GetDriverList, GetRider, UpdateRider, DeleteRider } from '../State/actions/actions';

import SearchForm from './SearchForm'
import Profile from "./Profile"
import "./Users.css"

const Rider = (props) => {
  const [data, setData] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const Filter = (input) => {            //Dont forget to change rider.location.name to rider.location
    setFilterState(data.filter((rider => rider.location.toLowerCase().includes(input.toLowerCase()))))
  }

// console.log('rider side props', props)
  const drivers = props.drivers

  useEffect(() => {
    props.GetDriverList()
    setFilterState(props.drivers)
    setData(props.drivers)
  }, []);

  const userID = props.user.rider_id;
  const profileInfo = props.user
  useEffect(() => {
    props.GetRider('rider', userID)
  }, [])


    return(

    <div className="Rider">

      <Profile />

      <SearchForm setFilterState={Filter} />
      {drivers && drivers.map(item => (
      <Card id="user-cards" className='user-cards' key={item.driver_id}>
        <CardBody>
          <CardTitle tag='h2'>{item.name}</CardTitle>
            <CardSubtitle>Location: {item.location}</CardSubtitle>
            <CardSubtitle>Price: {item.price}</CardSubtitle>
            <CardSubtitle>Bio: {item.bio}</CardSubtitle>
          <Button className="request-button" outline color="primary">Request</Button>
        </CardBody>
        <Dropdown className="dropdown" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <h1>Reviews</h1>
          </DropdownMenu>
        </Dropdown>
      </Card>))}
    </div>
    )
}


const mapStateToProps = state => {
    return {
    user: state.user,
    drivers: state.drivers,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = {
  GetDriverList,
  GetRider,
  UpdateRider,
  DeleteRider
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(Rider)