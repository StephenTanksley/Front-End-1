import React from 'react'

//Route import
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../../utils/api'

const PrivateRoute = (props) => {
    
const {
    component: Component,
    ...rest
} = props

return (
        <Route 
            {...rest} 
            render={(renderProps) => {

            if(getToken()) {
                return <Component {...renderProps} />
            } else {
                return <Redirect to='/login' />
            }
        }} />
    )
}

export default PrivateRoute;