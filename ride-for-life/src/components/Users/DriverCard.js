import React from 'react'

import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

import { connect } from 'react-redux'


const DriverCard = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
    
  const driver = props.driver
  console.log(props.rider)

    return (
        <div>
          <Card className='user-cards'>
            <CardBody>
              <CardTitle tag='h2'>{driver.name}</CardTitle>
              <CardSubtitle>Location: {driver.name}</CardSubtitle>
              <CardSubtitle>Price: {driver.name}</CardSubtitle>
              <CardSubtitle>Bio: {driver.name}</CardSubtitle>
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
          </Card>
        </div>
    )
}

const mapStateToProps = state => {
        return {
        drivers: state.drivers
    }
}

export default connect(
mapStateToProps,
null
)(DriverCard)