import React from 'react'
import { Redirect } from 'react-router-dom'
import { removeToken } from '../../utils/api'

const Logout = (props) => {
    removeToken()
    return <Redirect to="/login" />
}

export default Logout;