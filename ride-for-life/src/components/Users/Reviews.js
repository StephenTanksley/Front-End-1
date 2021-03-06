import React, { useEffect, useState } from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, ButtonGroup, Button, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

  import { connect } from 'react-redux'

  import AddReview from "./AddReview"
  import {
    UpdateDriverReviews,
    DeleteDriverReviews
  } from '../State/actions/actions'

  import "./Users.css"

  const Reviews = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [rSelected, setRSelected] = useState(null);
    const [reviews, setReviews] = useState([]);
    const toggle = () => setDropdownOpen(prevState => !prevState);


    return(
        <Dropdown className="dropdown" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Reviews
            </DropdownToggle>

                <ButtonGroup>
                  <Button size="sm" color="success" onClick={() => setRSelected(1)} active={rSelected === 1} className="review-button">Add Review</Button>
                  <Button size="sm" color="warning" onClick={() => setRSelected(2)} active={rSelected === 2} className="review-button">Edit</Button>
                  <Button size="sm" color="danger" onClick={() => setRSelected(3)} active={rSelected === 3} className="review-button">Delete</Button>
                </ButtonGroup>

                <>
                {rSelected && (rSelected === 1) ? <AddReview props={setReviews} /> : null}
                </>

            <DropdownMenu positionFixed={true} id="dropdown-menu" className="dropdown-menu">


                <DropdownItem disabled={true} id="dropdown-item">
                  Review 
                </DropdownItem>

                <DropdownItem divider/>

                <DropdownItem>
                  Review
                </DropdownItem>


                {/* I imagine we could have some conditional logic that renders a new dropdown item
                each time a rider submits a review (we should probably limit 1 review per driver for each rider)  */}


            </DropdownMenu>
        </Dropdown>
    )
  }

  const mapStateToProps = state => {
    return {
      reviews: state.reviews,
    }
  }

  const mapDispatchToProps = {
    UpdateDriverReviews,
    DeleteDriverReviews
  }


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Reviews)