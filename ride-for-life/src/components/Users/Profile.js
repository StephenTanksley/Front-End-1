import React, { useEffect } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

import { connect } from 'react-redux'
import { GetDriver, GetRider } from '../State/actions/actions'
import "./Users.css"


//this component should show the user's own profile information.

const Profile = (props) => {

    console.log('profile props', props)

    const loggedIn = (props.loggedIn === true)
    const driverRole = "driver";
    // console.log('driver', driverRole)

    const riderRole = "rider";
    // console.log('rider', riderRole)
    
    const profileInfo = props.user
    console.log('props.user info', profileInfo);
    return (
        <>

        {profileInfo && loggedIn && (driverRole === props.user.role) 
        ? 
        <div className="profile">
            <div className="profile-card">
                <Card id="profile-card">
                <CardTitle tag="h3">{profileInfo.username}</CardTitle>
                <CardSubtitle>Location: {profileInfo.location}</CardSubtitle>
                <CardSubtitle>Price: {profileInfo.price}</CardSubtitle>
                <CardSubtitle>Bio: {profileInfo.bio}</CardSubtitle>
                </Card>
            </div>

            <div className="profile-buttons">
                <Button color="warning" className="edit">Edit</Button>
                <Button color="danger" className="delete">Delete</Button>
            </div>
          </div>
        
        : null}

        {profileInfo && loggedIn && (riderRole === props.user.role) 
        ? 
        <div className="profile">
            <div className="profile-card">
                <Card id="profile-card">
                <CardTitle tag="h3">{profileInfo.username}</CardTitle>
                <CardSubtitle>Location: {profileInfo.location}</CardSubtitle>
                </Card>
            </div>
            
            <div className="profile-buttons">
                <Button color="warning" className="edit">Edit</Button>
                <Button color="danger" className="delete">Delete</Button>
            </div>
        </div>
        
        : null}
{/*         
        <p>Hello from the Profile component. The profile component is going to show the user's profile and also have an embedded component for editing and deleting the user's profile.</p>  */}
        </>
    )
}


const mapStateToProps = state => {
        return {
        user: state.user,
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = {
   GetDriver,
   GetRider
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)



//need to make an edit form component and a delete profile button.