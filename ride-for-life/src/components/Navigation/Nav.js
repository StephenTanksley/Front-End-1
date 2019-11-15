import React, {useState} from 'react'
import { Link, Redirect, Route } from 'react-router-dom'

import { getToken } from '../../utils/api'

const Navigation = () => {
    const signedIn = getToken()

    return(
        <div>
            <nav className="navigation-bar">
                {/* Checks to see if we have a token. If not, we log in... */}
                {!signedIn && <Link to='/login'>Login</Link>}
            
                {/* If we do have a token, we redirect to our account. */}


                {/* Link to log out. */}
                {signedIn && <Link to='./logout'>Logout</Link>}

            </nav>

        </div>
    )
}

export default Navigation