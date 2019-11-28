import React, { useState } from 'react'
import { connect } from 'react-redux'
import { 
    UpdateDriver,
    UpdateRider,
    EditingUserStop 
} from '../State/actions/actions';


const EditForm = (props) => {

    const [driverEdits, setDriverEdits] = useState(props.currentUser)

    console.log('current user', props.currentUser)
    return(
        <>
        This is an edit form from inside the EditForm component.

        <form className="edit-form">

            <input 
                type='text'
                placeholder={props.currentUser.name}
            />

            <input 
                type='text'
                placeholder={props.currentUser.price}
            />

            <input 
                type='text'
                placeholder={props.currentUser.location}
            />

            <input 
                type='text'
                placeholder={props.currentUser.bio}
            />


        </form>
        </>
    )
}

const mapStateToProps = state => {
        return {
        user: state.user,
        currentUser: state.currentUser,
        updatingDriver: state.updatingDriver,
        updatingRider: state.updatingRider,
    }
}

const mapDispatchToProps = {
    UpdateRider,
    UpdateDriver,
    EditingUserStop
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditForm)