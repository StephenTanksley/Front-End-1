import React from 'react'

import Profile from '../Users/Profile'

import { 

    //driver
    UpdateDriver,
    DeleteDriver 
    
} from '../State/actions/actions';

const Driver = () => {
    return(<div>
        <h1>Driver</h1>
        <Profile />
    </div>)
}

export default Driver;