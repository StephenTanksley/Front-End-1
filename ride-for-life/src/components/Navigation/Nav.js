import React, {useState} from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import "./Nav.css"

import { getToken } from '../../utils/api'

const Navigation = (props) => {
    const loggedIn = props.loggedIn

    return(
        <div>
            <div className="nav-header">
                <h2>Ride For Life</h2>
            </div>
            <nav className="navigation-bar">
                {/* Checks to see if we have a token. If not, we log in... */}
                {!loggedIn && <Link to={'/login'} > <Button color='secondary'>Login</Button> </Link>}
                {!loggedIn && <Link to={'/rider-signup'} > <Button color='secondary'>Rider Signup</Button> </Link>}
                {!loggedIn && <Link to={'/driver-signup'} > <Button color='secondary'>Driver Signup</Button> </Link>}

                           
                {/* If we do have a token, we redirect to our account. */}

                {/* Link to log out. */}
                {loggedIn && <Link to={'/logout'} > <Button color='secondary'>Logout</Button></Link>}
            </nav>

        </div>
    )
}


const mapStateToProps = state => {
        return {
        loggedIn: state.loggedIn
    }
}

export default connect(
mapStateToProps,
null
)(Navigation)