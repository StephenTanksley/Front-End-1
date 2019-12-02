import React from "react"
import { withFormik, Form, Field, resetForm } from "formik";
import {Button } from "reactstrap";
import * as yup from "yup";

import "./Users.css"

const AddReview = ({setReviews, handleSubmit, errors, touched, values, handleChange}) => {

        return(
                <div className="add-review">
                <Form 
                  onSubmit={handleSubmit}
                  >
                              
                        <label>Reviews</label>
                        <div>
                                {touched.review && errors.review && (
                                <p>Error: {errors.review}</p>)} 
                                <Field name='review' 
                                        className="add-review-field"
                                        type='text' 
                                        placeholder='enter review'     
                                        value={values.review} 
                                        onChange={handleChange} 
                                        />
                        </div>
                
                        <Button size="sm" color="success" className='submit' type="submit" >Submit</Button>
        
                </Form>
                </div>                  
              );  
        }

        const formikUserForm = withFormik({
            mapPropsToValues({review}){
                    return {
                            review: review || "",
                };
        },

              validationSchema: yup.object().shape({
                  review: yup.string()
                  .required()
                  .min(16)
                  .max(350),
        
             }),

            handleSubmit:(values, { setReviews }) => {
                    console.log('values', values)
            }
        })(AddReview);

export default formikUserForm;