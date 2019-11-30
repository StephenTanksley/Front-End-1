import React, { useEffect, useState } from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, ButtonGroup, Button, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

  import "./Users.css"

  const Reviews = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [rSelected, setRSelected] = useState(null);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <Dropdown className="dropdown" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Reviews
            </DropdownToggle>

            <DropdownMenu positionFixed={true} id="dropdown-menu" className="dropdown-menu">
                <DropdownItem disabled={true} id="dropdown-item">
                Reviews Reviews Reviews Reviews Reviews Reviews
                Reviews Reviews Reviews Reviews Reviews Reviews 
                Reviews Reviews Reviews Reviews Reviews Reviews
                </DropdownItem>

                <DropdownItem divider/>

                <DropdownItem disabled={true} id="dropdown-item">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum 
                
                </DropdownItem>
                <DropdownItem divider/>

                <ButtonGroup>
                  <Button size="sm" color="warning" onClick={() => setRSelected(1)} active={rSelected === 1}>Edit</Button>
                  <Button size="sm" color="danger" onClick={() => setRSelected(2)} active={rSelected === 2}>Delete</Button>
                </ButtonGroup>

                {/* I imagine we could have some conditional logic that renders a new dropdown item
                each time a rider submits a review (we should probably limit 1 review per driver for each rider)  */}


            </DropdownMenu>
        </Dropdown>
    )
  }

  export default Reviews;