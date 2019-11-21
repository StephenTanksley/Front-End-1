import React from 'react'
import { Redirect } from 'react-router'
import { LogoutUser } from '../State/actions/actions'
import { connect } from 'react-redux'

const Logout = (props) => {
    props.LogoutUser()
    return <Redirect to="/login" />
}

const mapDispatchToProps = {
    LogoutUser
}

export default connect(
    null,
    mapDispatchToProps
)(Logout)