import React, { useState } from "react";
import "../assets/Signup.css";
import Useform from "../hooks/Useform";
import validate from "../utils/validate";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {login}from '../redux/userSlice';
const Login = (props) => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch();

 

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login({
      email:email
    }))
    setErrors(validate({  email, password }));

    try {
      const response = await axios.post('http://localhost:8082/api/v1/auth/authenticate', {
       
        email: email,
        password: password
      });

      if (response.status === 200) {
        
        setEmail('');
        setPassword('');
        setIsSubmit(true); // Set the isSubmit state to true on successful form submission
      }

    } catch (error) {
      alert(error);
      setIsSubmit(false);
    }
  };

  const validate = (values) => {
    const errors = {};



    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }

    setIsSubmit(Object.keys(errors).length === 0);

    return errors;
  };

  // Redirect to the signup page if isSubmit is true
  if (isSubmit) {
    navigate('/Home');
  }


  
  return (
    <div className="body4">
      <h1 className="heading">eReadX</h1>
      <div className="form-container">
        <div className="form-content-left">
          <img
            src="https://c0.wallpaperflare.com/preview/313/765/126/book-return-read-books.jpg"
            alt="left"
            className="form-img"
          />
        </div>

        <div className="form-content-right">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Sign in</h1>

            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                email="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmail}
              />
              <div className="emailcolor">
              {errors.email}
            </div>
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                email="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={handlePassword}
              />
              <div className="emailcolor">
              {errors.password
              }
              </div>
            </div>

            <button className="form-input-btn">Login</button>
            <div className="emailcolor">
              {errors.loginError && <span>{errors.loginError}</span>}
              </div>
            <br></br>
            <br></br>
            <span className="form-input-login">
              Don't have an account? Signup <a href="Login">here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
