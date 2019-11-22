import React from 'react'

import { connect } from 'react-redux'

const Profile = (props) => {

    console.log(props.user)

    return (
        <>
        Hello from the Profile component.
        </>
    )
}



const mapStateToProps = state => {
        return {
        user: state.user
    }
}

const mapDispatchToProps = {
   
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)