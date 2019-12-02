import React, {useState, useEffect} from 'react'

import { connect } from 'react-redux'
import { 
    AddDriverReviews, 
    UpdateDriverReviews,
    EditingUserStart,
    EditingUserStop
    } from '../State/actions/actions'


    //this form is going to handle both adding and editing.
const ReviewsForm = (props) => {

    const reviewsArray = props.reviews
    console.log(reviewsArray)

    const [review, setReview] = useState({
        rating: 0 || null,
        review: "",
        date: "",
        // reviewID: need to figure out how to set this.
        // riderID: need to supply this via props.
        // driverID: need to supply this via an event target.
    })

    const handleChange = (e) => {
        e.preventDefault()
        setReview({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        props.AddDriverReviews(review)
        props.EditingUserStop()
    }
    

    return (

        <div className="reviews-form">

            {props.editing 
            ? 
            <div>
                <label>Editing review!</label>
                <form onSubmit = {handleSubmit}>
                    <input 
                        type="number"
                        name="rating"
                        placeholder="Rate your driver"
                        value={props.reviews.rating}
                        onChange={handleChange}
                        />
                    <input 
                        type="date"
                        name="date"
                        placeholder="mm/dd/yyyy"
                        value={props.reviews.date}
                        onChange={handleChange}

                        />
                    <input 
                        type="text"
                        name="body"
                        placeholder="Review your driver"
                        value={props.reviews.body}
                        onChange={handleChange}
                        />
                </form>
            </div>
            : 
            <div>
                <label>Rate your ride!</label>
                <form onSubmit = {handleSubmit}>
                    <input 
                        type="number"
                        name="rating"
                        placeholder="Rate your driver"
                        value="rating"
                        onChange={handleChange}
                        />
                    <input 
                        type="date"
                        name="date"
                        placeholder="mm/dd/yyyy"
                        value="date"
                        onChange={handleChange}
                        />
                    <input 
                        type="text"
                        name="body"
                        placeholder="Review your driver"
                        value="body"
                        onChange={handleChange}
                        />
                </form>
            </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        user: state.user,
        currentUser: state.currentUser,  
        reviews: props.reviews,
        editing: props.editing
    }    
}

const mapDispatchToProps = {
    AddDriverReviews,
    UpdateDriverReviews,
    EditingUserStart,
    EditingUserStop
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsForm)