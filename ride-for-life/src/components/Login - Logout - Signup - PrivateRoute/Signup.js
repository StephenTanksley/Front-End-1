import React, { useState } from "react";
import { Formik, withFormik, Form, Field,} from "formik";
import {Button} from "reactstrap";
import * as yup from "yup";


const Signup = ({handleSubmit, errors, touched, values, handleChange}) => {


        return(
                <Form 
                  className='form' 
                  onSubmit={handleSubmit}
                  >
                              
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
                
                        <div>
                                {touched.role && errors.role && (
                                <p>Error: {errors.role}</p>)}
                                <label>Are you signing up to be a driver?</label>
                                <br/>
                                <Field 
                                type='checkbox' id='role' 
                                name='role' 
                                checked={values.role} 
                                onChange={handleChange} />
                        </div>
                
                        <Button outline color="primary" className='submit' type="submit" >Submit</Button>
                </Form>                  
              );
              
        }
        const formikUserForm = withFormik({
            mapPropsToValues({name, username, password, role, errors, values}){
                    console.log(values)
                    return {
                            name: name || "",
                            username: username || "",
                            password: password ||  "",
                            role: role || false
                };
        },
              validationSchema: yup.object().shape({
                  name: yup.string()
                  .required()
                  .min(2)
                  .max(18),
        
                  username: yup.string()
                  .min(4)
                  .required(),
        
                  password: yup.string()
                  .min(6)
                  .required(),

                  role: yup.bool()
             }),
            handleSubmit:(values, {}) => {
                    console.log(values)
                
            }       
        })(Signup);


// Checkbox - if unchecked, user. If 


export default formikUserForm;

//This is what will happen when a user signs up. User should choose their role some way.

// switch('role_id') {

//SUPER STRETCH GOAL ________
//     case('role_id' === 1):
        // return (<Admin />)
        // break;
//___________________________



//MVP _______________________
//     case('role_id' === 2):
        // return (<Driver />)
        // break;


//     case('role_id' === 3):
        // return (<Rider />)
        // break;

//      default:
//          return <something/>

        // }