import React, {useState, useEffect} from 'react'



import { connect } from 'react-redux'

const ReviewsForm = (props) => {
    return (
        <div className="reviews-form">
            <label>Rate your ride!</label>
            <form>
                <input 
                    type="number"
                    name="rating"
                    placeholder="Rate your driver"
                    value="rating"
                    />
                <input 
                    type="text"
                    name="body"
                    placeholder="Review your driver"
                    value="body"
                    />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return{  
    reviews: props.reviews
    }    
}

const mapDispatchToProps = {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsForm)