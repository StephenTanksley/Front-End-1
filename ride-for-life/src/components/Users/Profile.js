import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { GetDriver, GetRider } from '../State/actions/actions'


//this component should show the user's own profile information.

const Profile = (props) => {

    console.log('profile props', props)

    const loggedIn = (props.loggedIn === true)
    const driverRole = "driver";
    // console.log('driver', driverRole)

    const riderRole = "rider";
    // console.log('rider', riderRole)
    
    const profileInfo = props.user
    console.log('props.user info', profileInfo)

    return (
        <>

        {profileInfo && loggedIn && (driverRole === props.user.role) 
        ? <div className="profile-card">
            <h4>{profileInfo.name}</h4>
            <p>{profileInfo.location}</p>
            <p>{profileInfo.price}</p>
            <p>{profileInfo.bio}</p>
          </div>
        
        : null}

        {profileInfo && loggedIn && (riderRole === props.user.role) 
        ? <div className="profile-card">
            <h4>{profileInfo.name}</h4>
            <p>{profileInfo.location}</p>
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