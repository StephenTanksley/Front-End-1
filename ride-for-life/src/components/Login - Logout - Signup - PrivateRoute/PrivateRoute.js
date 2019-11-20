import React from 'react'

//Route import
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../../utils/api'

const PrivateRoute = (props) => {
    const loggedIn = getToken()
    const {
        component: Component,
        ...rest
    } = props

return (
        <Route 
            {...rest} 
            render={(renderProps) => {

            if(loggedIn) {
                return <Component {...renderProps} />
            } else {
                return <Redirect to='/login' />
            }
        }} />
    )
}

export default PrivateRoute;