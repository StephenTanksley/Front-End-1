import React, { useState } from 'react'
import { connect } from 'react-redux'
import { 
    UpdateDriver,
    UpdateRider,
    EditingUserStop 
} from '../State/actions/actions';



//need to fix the uncontrolled component to be a controlled component.

const EditForm = (props) => {

    const user = props.user
    const id = props.currentUser.id
    
    const driverRole = "driver";
    const riderRole = "rider";

    const [driverEdits, setDriverEdits] = useState({
        name: user.name || '',
        price: user.price || '',
        location: user.location || '',
        bio: user.bio || ''
    } || initialDriverValue)

    const initialDriverValue = {
        name: '',
        price: '',
        location: '',
        bio: ''
    }

    const [riderEdits, setRiderEdits] = useState({
        name: user.name || '',
        location: user.location || ''
    } || initialRiderValue)


    const initialRiderValue = {
        name: '',
        location: ''
    }


    const handleChange = e => {
        if(user.role === driverRole) {
        setDriverEdits({
            [e.target.name]: e.target.value
            })
        } else {
        setRiderEdits ({
            [e.target.name]: e.target.value    
            })
        }
    }
    
    const handleSubmit = () => {
        if(user.role === driverRole) {
          props.UpdateDriver(driverEdits, id)
          console.log(driverEdits)
        //   setDriverEdits(initialDriverValue)
        } else {
          props.UpdateRider(riderEdits, id)
          console.log(riderEdits)
        //   setRiderEdits(initialRiderValue)
        }
        props.EditingUserStop()
      }

    // console.log('current user', props.currentUser)

    return(
        <>
       
     { user.role === driverRole ?  

        <div>
            <form className="edit-form" onSubmit={handleSubmit}>

                <input 
                    type='text'
                    name="name"
                    placeholder={props.currentUser.name}
                    value={user.name}
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    name="price"
                    placeholder={props.currentUser.price}
                    value={user.price}
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    name="location"
                    placeholder={props.currentUser.location}
                    value={user.location}
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    name="bio"
                    placeholder={props.currentUser.bio}
                    value={user.bio}
                    onChange={handleChange}
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>

        :
        
        <div>
            <form className="edit-form" onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name="name"
                    placeholder={props.currentUser.name}
                    value={user.name}
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    name="location"
                    placeholder={props.currentUser.location}
                    value={user.name}
                    onChange={handleChange}
                />

                <button type="submit" className="submit-button">Submit</button>
            </form>

        </div>}
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