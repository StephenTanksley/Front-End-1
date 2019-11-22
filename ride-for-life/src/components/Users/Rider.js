import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

import { connect } from 'react-redux'
import { GetDriverList } from '../State/actions/actions';
import { axiosRequest as axios } from '../../utils/api';
import SearchForm from './SearchForm'
import "./Users.css"

import { 

  //rider
  UpdateRider,
  DeleteRider,

} from '../State/actions/actions';

const Rider = (props) => {
  const { drivers } = props
  const [data, setData] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const Filter = (input) => {            //Dont forget to change rider.location.name to rider.location
    setFilterState(data.filter((rider => rider.name.toLowerCase().includes(input.toLowerCase()))))
  }

  console.log(props)


  useEffect(() => {
    console.log(props)
    props.GetDriverList()
    setFilterState(props.drivers)
    setData(props.drivers)
  }, []);


    return(
      // <h1>Hello from the Rider component.</h1>

    <div className="Rider">

    <SearchForm setFilterState={Filter} />
    {props.drivers && props.drivers.map(data => (
    <Card className='rider-cards' key={data.driver_id}>
        <CardBody>
          <CardTitle tag='h2'>{data.name}</CardTitle>
            <CardSubtitle>Location: {data.location}</CardSubtitle>
            <CardSubtitle>Price: {data.price}</CardSubtitle>
            <CardSubtitle>Bio: {data.bio}</CardSubtitle>
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
    drivers: state.drivers
  }
}

const mapDispatchToProps = {
  GetDriverList
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(Rider)