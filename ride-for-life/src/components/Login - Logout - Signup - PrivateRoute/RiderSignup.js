import React, { useState } from "react";
import {withFormik, Form, Field} from "formik";
import {Button} from "reactstrap";
import {Link} from 'react-router-dom';
import * as yup from "yup";

//action import
import { AddRider, LoginUser } from '../State/actions/actions';

//redux import
import { connect } from 'react-redux';


const RiderSignup = ({handleSubmit, errors, touched, values, handleChange}) => {

        return(
                <Form 
                  className='form rider' 
                  onSubmit={handleSubmit}
                  >
                        {/* 
                                //Why are we linking to the dashboard here? Dashboard is a 
                                protected route.
                        
                        <Link to={'/'} > <Button color='secondary'>Home</Button> </Link> */}
                        <br />
                        <h1>Rider Signup</h1>
                        
                        <label>Name</label>
                        <div>
                                {touched.name && errors.name && (
                                <p>Error: {errors.name}</p>)} 
                                <Field name='name' 
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
                                type='text' 
                                placeholder='enter a password' 
                                value={values.password} 
                                onChange={handleChange} />
                        </div>

                        <label>Location</label>
                        <div>
                                {touched.location && errors.location && (
                                <p>Error: {errors.location}</p>)} 
                                <Field name='location' 
                                type='text' 
                                placeholder='location'     
                                value={values.location} 
                                onChange={handleChange} />
                        </div>

        
                        <Button outline color="primary" className='submit' type="submit" >Submit</Button>
                </Form>                  
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
                            price: null || '',
                            bio: null || '',
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
                  .min(6)
                  .max(25),

                  role: yup.bool(),

                  location: yup.string()
                  .required()
                  .min(2)
                  .max(250),
             }),
            handleSubmit:(values, { setSubmitting, resetForm, props }) => {
                    console.log(values)
                    props.AddRider(values)
                    props.LoginUser(values)
                    resetForm()
            }       
        })(RiderSignup);

        const mapDispatchToProps = {
                AddRider
        }

        export default connect(
                null,
                mapDispatchToProps
        )(formikUserForm)