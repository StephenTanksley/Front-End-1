import React, { useState } from "react";
import { Formik, withFormik, Form, Field,} from "formik";
import {Button} from "reactstrap";
import * as Yup from "yup";


const Signup = ({handleChange, values}) => {

return(
<Formik>
  <Form>
          
      <Field 
        type="text" 
        name="name" 
        placeholder="Name:" 
        onChange={handleChange}
        />

      <Field 
        type="text" 
        name="username" 
        placeholder="Username:" 
        onChange={handleChange}  
        />

      <Field 
        type='password' 
        name='password' 
        placeholder="Password:" 
        onChange={handleChange} 
        />

      <Field 
        type="checkbox" 
        name="role_id" 
        onChange={handleChange} 
        />

      <Button outline color="primary">Submit!</Button>
  </Form>
</Formik>);
}

const SignupForm = withFormik({
        mapPropsToValues({ name, username, password }) {
          return {
            name: name || "",
            username: username || "",
            password: password || ""
          };
        },
      
        handleSubmit(values) {
          console.log(values);
          //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
        }
      })(Signup);

// Checkbox - if unchecked, user. If 

const user = {
        name: "",
        username: "",
        password: "",
        role_id: ""
}
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