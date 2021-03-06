import React, { useState } from "react";
import {withFormik, Form, Field} from "formik";
import {Button} from "reactstrap";
import {Link} from 'react-router-dom';
import * as yup from "yup";

//action import
import { AddUser, LoginUser } from '../State/actions/actions';

//redux import
import { connect } from 'react-redux';


const RiderSignup = ({handleSubmit, errors, touched, values, handleChange}) => {

        return(

            <div className="rider-signup">

                <Form 
                  className='form-rider' 
                  onSubmit={handleSubmit}
                  >

                        <h1>Rider Signup</h1>
                        
                        <label>Name</label>
                        <div>
                        {touched.name && errors.name && (
                                <p>Error: {errors.name}</p>)} 
                                <Field 
                                        name='name'
                                        className="signup-field"
                                        type='text' 
                                        placeholder='enter name'     
                                        value={values.name} 
                                        onChange={handleChange} />
                        </div>
                
                        <label>Username</label>
                        <div>
                        {touched.username && errors.username && (
                                <p>Error: {errors.username}</p>)} 
                                <Field 
                                        name='username'
                                        className="signup-field"
                                        type='text' 
                                        placeholder='enter a username' 
                                        value={values.username} 
                                        onChange={handleChange} />
                        </div>
                
                        <label>Password</label>
                        <div>
                        {touched.password && errors.password && (
                                <p>Error: {errors.password}</p>)}
                                <Field 
                                        name='password'
                                        className="signup-field"
                                        type='text' 
                                        placeholder='enter a password' 
                                        value={values.password} 
                                        onChange={handleChange} />
                        </div>

                        <label>Location</label>
                        <div>
                        {touched.location && errors.location && (
                                <p>Error: {errors.location}</p>)} 
                                <Field 
                                        name='location'
                                        className="signup-field"
                                        type='text' 
                                        placeholder='enter your location'     
                                        value={values.location} 
                                        onChange={handleChange} />
                        </div>

        
                        <Button color="primary" className='submit' type="submit" >Submit</Button>
                </Form>                  
        </div>
              );
        }
        const formikUserForm = withFormik({
                mapPropsToValues({name, username, password, role, values, price, location, bio }){
                        console.log(values)
                        return {
                                name: name || "",
                            username: username || "",
                            password: password ||  "",
                            role: role || "rider",
                            location: location || "",
                            price: price || null,
                            bio: bio || null,
                            role_id: 3
                };
        },
              validationSchema: yup.object().shape({
                  name: yup.string()
                  .required()
                  .min(2)
                  .max(18),
        
                  username: yup.string()
                  .required()
                  .min(4)
                  .max(15),
        
                  password: yup.string()
                  .required()
                  .min(5)
                  .max(25),

                  location: yup.string()
                  .required()
                  .min(2)
                  .max(250),
             }),
            handleSubmit:(values, { setSubmitting, resetForm, props }) => {
                    console.log(values)
                    console.log(props)
                    props.AddUser(values)
                //     props.LoginUser(values)
                //     props.history.push('/dashboard')
                    resetForm()
            }       
        })(RiderSignup);

        const mapDispatchToProps = {
                AddUser
        }

        export default connect(
                null,
                mapDispatchToProps
        )(formikUserForm)