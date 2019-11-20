import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

const Rider = (person) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
    <div>
    <Link to={'/'} > <Button color='secondary'>Home</Button> </Link>
    <br />
    <Card>
        <CardBody>
          <CardTitle tag='h2'>{"person.name"}</CardTitle>
          <CardSubtitle>Location: {"person.location"}</CardSubtitle>
          <CardSubtitle>Price: {"person.price"}</CardSubtitle>
          <CardSubtitle>Bio: {"person.bio"}</CardSubtitle>
          <Button outline color="primary">Request</Button>
        </CardBody>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <h1>Reviews</h1>
        </DropdownMenu>
        </Dropdown>
    </Card>
    </div>)
}

export default Rider;