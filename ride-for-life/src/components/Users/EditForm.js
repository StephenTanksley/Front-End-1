import React, { useState } from 'react'
import { connect } from 'react-redux'
import { 
    UpdateDriver,
    UpdateRider,
    EditingUserStop 
} from '../State/actions/actions';

const EditForm = (props) => {

    const user = props.user
    console.log('props from editForm', props)
    const driverRole = "driver";
    const riderRole = "rider";
    
    // there's a discrepancy between the driver's role assignment and the rider's side on the back end. 
    // I'm fixing that by programmatically assigning the id variable.

    const id = (props.user.role === riderRole) 
    ? props.user.rider_id
    : props.currentUser.id

    const [driverEdits, setDriverEdits] = useState({
        name: user.name || '',
        price: user.price || '',
        location: user.location || '',
        bio: user.bio || '',
        password: user.password || ''
    } || initialDriverValue)

    const initialDriverValue = {
        name: '',
        price: '',
        location: '',
        bio: '',
        password: ''
    }

    const [riderEdits, setRiderEdits] = useState({
        name: user.name || '',
        location: user.location || '',
        password: user.password || ''
    } || initialRiderValue)


    const initialRiderValue = {
        name: '',
        location: '',
        password: ''
    }


    const handleChange = (e) => {
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
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.role === driverRole) {
          props.UpdateDriver(driverEdits, id)
          console.log('driver edits - ', driverEdits, 'id - ', id)
        } else {
          props.UpdateRider(riderEdits, id)
          console.log('rider edits - ', riderEdits, 'id - ', id)
        }
        props.EditingUserStop()
      }

    return(

        <>
       
     { user.role === driverRole ?  

        <div>
            <form className="edit-form" onSubmit={handleSubmit}>

                <input 
                    type='text'
                    name="name"
                    placeholder={props.currentUser.name || 'name'}
                    value={user.name}
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    name="price"
                    placeholder={props.currentUser.price || 'price'}
                    value={user.price}
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    name="location"
                    placeholder={props.currentUser.location || 'location'}
                    value={user.location}
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    name="bio"
                    placeholder={props.currentUser.bio || 'bio'}
                    value={user.bio}
                    onChange={handleChange}
                />

                <input 
                    type='password' 
                    name='password'
                    placeholder='password'
                    value={props.user.password}
                    onChange={handleChange} 
                    required
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
                    placeholder={props.currentUser.name || 'name'}
                    value={user.name}
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    name="location"
                    placeholder={props.currentUser.location || 'location'}
                    value={user.location}
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    name="password"
                    placeholder="Current Password"
                    value='password'
                    onChange={handleChange}
                    required
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