import React, { useEffect } from 'react'

import Profile from '../Users/Profile'

//redux
import { connect } from 'react-redux'
import { GetDriverProfile } from '../State/actions/actions'

import { 

    //driver
    UpdateDriver,
    DeleteDriver 
    
} from '../State/actions/actions';

const Driver = (props) => {

  console.log('driver component props', props)

  useEffect(() => {

  })

  console.log(props)
    return(
    <div className="Driver">
        <h1>Welcome back, {props.name}</h1>
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

}


export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(Driver)