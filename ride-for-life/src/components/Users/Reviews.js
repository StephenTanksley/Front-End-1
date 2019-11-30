import React, { useEffect, useState } from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

  import "./Users.css"

  const Reviews = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <Dropdown className="dropdown" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Dropdown
            </DropdownToggle>

            <DropdownMenu positionFixed={true} id="dropdown-menu" className="dropdown-menu">
                <DropdownItem disabled={true} id="dropdown-item">
                Reviews Reviews Reviews Reviews Reviews Reviews
                Reviews Reviews Reviews Reviews Reviews Reviews 
                Reviews Reviews Reviews Reviews Reviews Reviews
                </DropdownItem>
                
                <DropdownItem divider/>

                <DropdownItem disabled={true} id="dropdown-item">
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum 
                </p>
                </DropdownItem>

                {/* I imagine we could have some conditional logic that renders a new dropdown item
                each time a rider submits a review (we should probably limit 1 review per driver for each rider)  */}

            </DropdownMenu>
        </Dropdown>
    )
  }

  export default Reviews;