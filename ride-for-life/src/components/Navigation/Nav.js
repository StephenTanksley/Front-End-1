import React, {useState} from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import logo from "./RFLlogo-horz.svg"
import "./Nav.css"

import { getToken } from '../../utils/api'

const Navigation = (props) => {
    const loggedIn = props.loggedIn
    
    const driverRole = "driver";
    const riderRole = "rider";

    return(
        
        <div>
            <div className="nav-header">
                <img src={logo}></img>
            </div>
            <nav className = { props.user.role === driverRole ? "navigation-bar driver" : "navigation-bar rider"}>
                {/* Checks to see if we have a token. If not, we log in... */}
                {!loggedIn && <Link to={'/login'} > <Button color='secondary'>Login</Button> </Link>}
                {!loggedIn && <Link to={'/rider-signup'} > <Button color='secondary'>Rider Signup</Button> </Link>}
                {!loggedIn && <Link to={'/driver-signup'} > <Button color='secondary'>Driver Signup</Button> </Link>}

                           
                {/* Link to log out. */}
                {loggedIn && <Link to={'/logout'} > <Button color='secondary'>Logout</Button></Link>}
            </nav>

        </div>
   
    )
}


const mapStateToProps = state => {
        return {
        loggedIn: state.loggedIn,
        user: state.user
    }
}

export default connect(
mapStateToProps,
null
)(Navigation)