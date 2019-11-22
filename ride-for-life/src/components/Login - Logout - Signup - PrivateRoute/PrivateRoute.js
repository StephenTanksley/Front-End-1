import React from 'react'

//Route import
import { Route, Redirect } from 'react-router-dom'

//

//redux import
import { connect } from 'react-redux'

const PrivateRoute = (props) => {
    const {
        component: Component,
        ...rest
    } = props

return (
        <Route 
            {...rest} 
            render={(renderProps) => {

            if(localStorage.getItem('token')) {
                return <Component {...renderProps} />
            } else {
                return <Redirect to='/login' />
            }
        }} />
    )
}

export default PrivateRoute;