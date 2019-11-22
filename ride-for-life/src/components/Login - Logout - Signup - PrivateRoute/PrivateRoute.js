import React from 'react'

//Route import
import { Route, Redirect } from 'react-router-dom'

//redux import
import { connect } from 'react-redux'

const PrivateRoute = (props) => {
    console.log(props)
    const {
        component: Component,
        loggedIn: loggedIn,
        ...rest
    } = props

return (
        <Route 
            {...rest} 
            render={(renderProps) => {

            if(loggedIn) {
                props.history.push('/dashboard')
                return <Component {...renderProps} />
            } else {
                return <Redirect to='/login' />
            }
        }} />
    )
}

const mapStateToProps = state => {
    return {
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute)