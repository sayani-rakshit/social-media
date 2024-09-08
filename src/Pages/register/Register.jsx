import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./Register.css"
import { useEffect } from "react";
const Register=()=>{


    
      const [formData, setFormData] = useState({
        phone: '',
        username: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});
      const [phoneExists, setPhoneExists] = useState(false);
      const [successMessage, setSuccessMessage] = useState('');
      useEffect(()=>{
        setSuccessMessage("")
      },[]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        setSuccessMessage("")
      };
    
      const validate = () => {
        let valid = true;
        let errors = {};
    
        const phoneRegex = /^[0-9]+$/; // Regular expression for numeric values only
        const phoneStartRegex=/^[987]/
    
        if (!formData.phone) {
          errors.phone = 'Phone number is required';
          valid = false;
        } else if (!phoneRegex.test(formData.phone)) {
          errors.phone = 'Phone number must contain only numbers';
          valid = false;
        }else if(!phoneStartRegex.test(formData.phone)){
                    errors.phone='Phone number is not valid';
                    valid=false
        }else if(formData.phone.length !==10){
            errors.phone="phone number must be 10 digits";
            valid=false

        }

         else {
          const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
          if (existingUsers.some(user => user.phone === formData.phone)) {
            errors.phone = 'Phone number already exists';
            setPhoneExists(true);
            valid = false;
          } else {
            setPhoneExists(false);
          }
        }
    
        if (!formData.username) {
          errors.username = 'Username is required';
          valid = false;
        }
    
        const password = formData.password;
        const passwordRequirements = [
          { regex: /.{6,}/, message: 'Password must be at least 6 characters' },
          { regex: /[A-Z]/, message: 'Password must contain at least one uppercase letter' },
          { regex: /[^A-Za-z0-9]/, message: 'Password must contain at least one special character' }
        ];
    
        for (const requirement of passwordRequirements) {
          if (!requirement.regex.test(password)) {
            errors.password = requirement.message;
            valid = false;
            break;
          }
        }
    
        if (!password) {
          errors.password = 'Password is required';
          valid = false;
        }
    
        setErrors(errors);
        return valid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
          existingUsers.push(formData);
          localStorage.setItem('users', JSON.stringify(existingUsers));
          setSuccessMessage('User registered successfully');
          setFormData({
            phone: '',
            username: '',
            password: '',
          });
        }
      };




    return <div className="register">
        <div className="card">
            <div className="left">
                <h1>SAYANI SOCIAL</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, laboriosam et laborum ipsa iure ad atque alias reiciendis! Ab corporis, architecto commodi atque quisquam voluptas quis doloribus sunt sapiente molestias?</p>
                <span>Do you have an account</span>
                <Link to="/login">
                <button>Login</button>
                </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        {successMessage && <p>{successMessage}</p>}
                        <div>
                        <label htmlFor="username">Username :</label>
                        <input 
                        type="text"
                         name="username"
                         value={formData.username}  
                         onChange={handleChange} >

                         </input>
                         {errors.username && <p>{errors.username}</p>}
                         </div>
                     {/* <input type="text" placeholder="Email"></input> */}
                     <div>
                       <label htmlFor="password">Password:</label>
                        <input type="password"
                         name="password"
                         value={formData.password}
                         onChange={handleChange} >

                         </input>
                         {errors.password && <p>{errors.password}</p>}
                         </div>
                         <div>
                         <label htmlFor="phone">Phone Number:</label>
                        <input type="text"
                         name="phone"
                         value={formData.phone}
                         onChange={handleChange}>

                         </input>
                         {errors.phone && <p>{errors.phone}</p>}
                         </div>
                        <button type="submit">Register</button>
                    </form>

                
            </div>
        </div>
    </div>
}
export default Register;