import React, { useState } from "react";
import { Formik, withFormik, Form, Field, resetForm } from "formik";
import {Button} from "reactstrap";
import * as yup from "yup";
import {Link} from 'react-router-dom'

//action import
import { AddDriver } from '../State/actions/actions'
import { setToken } from "../../utils/api";

//redux
import { connect } from 'react-redux'


const DriverSignup = ({handleSubmit, errors, touched, values, handleChange }) => {

        return(
                <Form 
                  className='form driver'
                  onSubmit={handleSubmit}
                  >
                        <Link to={'/'} > <Button color='secondary'>Home</Button> </Link>
                        <br />
                        <h1>Driver Signup</h1>
                              
                        <label>Name</label>
                        <div>
                                {touched.name && errors.name && (
                                <p>Error: {errors.name}</p>)} 
                                <Field name='name' 
                                        type='text' 
                                        placeholder='enter name'     
                                        value={values.name} 
                                        onChange={handleChange} 
                                        />
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
                                        onChange={handleChange} 
                                        />
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
                                        onChange={handleChange} 
                                        />
                        </div>

                        <label>Location</label>
                        <div>
                                {touched.location && errors.location && (
                                <p>Error: {errors.location}</p>)} 
                                <Field 
                                        name='location' 
                                        type='text' 
                                        placeholder='location'     
                                        value={values.location} 
                                        onChange={handleChange} />
                        </div>

                        <label>What is your price</label>
                        <div>
                                {touched.price && errors.price && (
                                <p>Error: {errors.price}</p>)} 
                                <Field 
                                        name='price' 
                                        type='text' 
                                        placeholder='Price'     
                                        value={values.price} 
                                        onChange={handleChange} />
                        </div>

                        <label>Personal Bio</label>
                        <div>
                                {touched.bio && errors.bio && (
                                <p>Error: {errors.bio}</p>)} 
                                <Field name='bio' 
                                type='text' 
                                placeholder='Bio'     
                                value={values.bio} 
                                onChange={handleChange} />
                        </div>

                        <Button outline color="primary" className='submit' type="submit" >Submit</Button>
        
                </Form>                  
              );  
        }

        const formikUserForm = withFormik({
            mapPropsToValues({name, username, password, role, values, price, location, bio}){
                    console.log(values)
                    return {
                            name: name || "",
                            username: username || "",
                            password: password ||  "",
                            role: role || "driver",
                            location: location || "",
                            price: price || "",
                            bio: bio || "",
                            role_id: 2
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

                  location: yup.string()
                  .required()
                  .min(2)
                  .max(250),

                  price: yup.number()
                  .required()
                  .min(1)
                  .max(250),

                  bio: yup.string().max(250)
             }),

            handleSubmit:(values, { setSubmitting, resetForm, props }) => {
                    console.log('values', values)
                    props.AddDriver(values)
                    //need to add dispatch here.
                    resetForm()
            }
        })(DriverSignup);

        const mapDispatchToProps = {
                AddDriver
        }

        export default connect(
                null,
                mapDispatchToProps
            )(formikUserForm)


//This is what will happen when a user signs up. User should choose their role some way.

// switch('role') {

//SUPER STRETCH GOAL ________
//     case('role' === "admin"):
        // return (<Admin />)
        // break;
//___________________________


//MVP _______________________
//     case('role' === "driver":
        // return (<Driver />)
        // break;


//     case('role' === "rider"):
        // return (<Rider />)
        // break;

//      default:
//          return <something/>

        // }