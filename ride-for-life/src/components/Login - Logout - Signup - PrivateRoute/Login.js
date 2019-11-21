import React, { useState } from "react";
import {withFormik, Form, Field, resetForm } from "formik";
import {Button} from "reactstrap";
import * as yup from "yup";
import {Link, Redirect} from 'react-router-dom'


//action import
import { LoginUser } from '../State/actions/actions'
import { connect } from 'react-redux'

const Login = ({ handleSubmit, errors, touched, values, handleChange }) => {

        
        return(

                <div>
                <Form 
                  className='form' 
                  onSubmit={handleSubmit}
                  >
                        {/* 
                                //Why are we linking to the dashboard here? Dashboard is a 
                                protected route.

                        <Link to={'/'} > <Button color='secondary'>Home</Button> </Link> */}
                        
                        <br />

                        <h1>Login</h1>
                
                        <label>Username</label>
                        <div>
                                {touched.username && errors.username && (
                                <p>Error: {errors.username}</p>)} 
                                <Field 
                                name='username' 
                                type='text' 
                                placeholder='enter your username' 
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
                                placeholder='enter your password' 
                                value={values.password} 
                                onChange={handleChange} />
                        </div>

                        <Button outline color="primary" className='submit' type="submit" >Submit</Button>
                </Form>
                <div>Need a ride? {<Link to="/rider-signup">Rider signup</Link>}</div>
                <div>Do you like to drive? {<Link to="/driver-signup">Driver signup</Link>}</div>

  
                </div>                
              );
        }

        const formikUserForm = withFormik({
            mapPropsToValues({username, password, values}){
                    console.log(values)
                    return {
                            username: username || "",
                            password: password ||  "",
                };
        },
              validationSchema: yup.object().shape({
        
                  username: yup.string()
                  .required()
                  .min(4)
                  .max(15),
        
                  password: yup.string()
                  .required()
                  .min(5)
                  .max(25),
             }),
             handleSubmit:(values, { setSubmitting, resetForm, props  }) => {
                console.log('values', values)
                console.log(props)
                props.LoginUser(values)
                resetForm()
                props.history.push('/dashboard')
                // return (<Redirect to="/dashboard" />)
            }     
        })(Login);


const mapStateToProps = state => {
        return {
        user: state.user,
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = {
    LoginUser
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(formikUserForm)