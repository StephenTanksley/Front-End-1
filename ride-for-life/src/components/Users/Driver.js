import React, { useEffect } from 'react'

import Profile from '../Users/Profile'

//redux
import { connect } from 'react-redux'
import { GetRiderList, GetDriver, UpdateDriver, DeleteDriver } from '../State/actions/actions';


const Driver = (props) => {

  console.log('driver component props', props)

  const userID = props.user.driver_id;
  const profileInfo = props.user


  //if this works, it should retrieve a single driver's full user object and store it in CurrentUser.
  useEffect(() => {
    props.GetDriver('driver', userID)
  }, [])

    return(
    <div className="Driver">
        <h1>Welcome back, {profileInfo.username}</h1>
        <Profile />
    </div>)
}


const mapStateToProps = state => {
    return {
    user: state.user,
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = {
  GetRiderList,
  GetDriver,
  UpdateDriver,
  DeleteDriver
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Driver)