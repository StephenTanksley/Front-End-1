import React, { useState } from "react";
import { Formik, withFormik, Form, Field,} from "formik";
import {Button} from "reactstrap";
import * as yup from "yup";


const Signup = ({handleSubmit}) => {


        return(
                <Formik
                  initialValues={{ name: '',  username: '', password: '', role: false}}
                  render={props => {
                          console.log(props)
                    return(
                    <div className="form-list">

                      <Form 
                      className='form' 
                      onSubmit={handleSubmit}
                      >
                              
                      <label>Name</label>
                    <div>
                        {props.touched.name && props.errors.name && (
                            <p>Error: {props.errors.name}</p>
                            )} 
                            <Field name='name' 
                            type='text' 
                            placeholder='enter name' 
                            value={props.values.name} 
                            onChange={props.handleChange} />
                    </div>
        
                            <label>Username</label>
                    <div>
                        {props.touched.username && props.errors.username && (
                            <p>Error: {props.errors.username}</p>
                            )} 
                            <Field 
                            name='username' 
                            type='text' 
                            placeholder='enter a username' 
                            value={props.values.username} 
                            onChange={props.handleChange} />
                    </div>
        
                            <label>Password</label>
                    <div>
                        {props.touched.password && props.errors.password && (
                            <p>Error: {props.errors.password}</p>
                            )}
                            <Field 
                            name='password' 
                            type='text' 
                            placeholder='enter a password' 
                            value={props.values.password} 
                            onChange={props.handleChange} />
                    </div>
        
                    <div>
                        {props.touched.role && props.errors.role && (
                            <p>Error: {props.errors.role}</p>
                            )}
                            <label>Are you signing up to be a driver?</label>
                            <br/>
                            <Field 
                            type='checkbox' id='role' 
                            name='role' 
                            checked={props.values.role} 
                            onChange={props.handleChange} />
                    </div>
            
                        <Button outline color="primary" className='submit' type="submit" >Submit</Button>
                      </Form>                  
                      </div>
                    )
                  }}
                />
              );
        
        }
        const formikUserForm = withFormik({
            mapPropsToValues({name, username, password, role}){
                console.log()
                return {
                  name: name || "",
                  username: username || "",
                  password: password ||  "",
                  role: role
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


export default Signup;

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