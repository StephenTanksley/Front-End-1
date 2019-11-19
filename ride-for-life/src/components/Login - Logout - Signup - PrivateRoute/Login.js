import React, { useState } from "react";
import {withFormik, Form, Field} from "formik";
import {Button} from "reactstrap";
import * as yup from "yup";


const Login = ({handleSubmit, errors, touched, values, handleChange}) => {

        return(
                <Form 
                  className='form' 
                  onSubmit={handleSubmit}
                  >
                        <h1>Login</h1>
                
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

                        <Button outline color="primary" className='submit' type="submit" >Submit</Button>
                </Form>                  
              );
              
        }
        const formikUserForm = withFormik({
            mapPropsToValues({username, password, values,}){
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
                  .min(6)
                  .max(25),

             }),
            handleSubmit:(values, {}) => {
                    console.log(values)
                
            }       
        })(Login);


// Checkbox - if unchecked, user. If 


export default formikUserForm;