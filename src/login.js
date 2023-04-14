import axios from "axios";
import "./style/login.css"
import { Email_s, Token_s } from "./Store/login_slice";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Api_base from "./api/api";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch=useDispatch()
  const Nav=useNavigate()

  function validateEmail() {
    // This regular expression checks if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }

  function validatePassword() {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevent form submission
    validateEmail();
    validatePassword();
    // Check if there are any errors before submitting the form
    if (!emailError && !passwordError) {
         const data={
            email:email,
            password:password
         }
          axios.post(`${Api_base}login`, data).then((Response)=>{
          console.log(Response.data)
          if(Response.data.message=="connected"){
             dispatch(Token_s(Response.data.token))
             localStorage.setItem('token',Response.data.token);
             Nav("/")
          }else if(Response.data.message=="vrefie votre email"){
              dispatch(Email_s(email))
              Nav("/validation")
          }else if(Response.data.message=="password incorrect"){
            setPasswordError(Response.data.message)
          }else if(Response.data.message=="email incorrect") {
             setEmailError("email incorrect")
          }
         })
    }
  }

  return (
    <div id="login">
      <div className="form-structor">
        <div className="signup">
          <h2 className="form-title" id="signup">login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-holder">
              <input type="email" className="input" placeholder="Email"
                     value={email} onChange={e => setEmail(e.target.value)} onBlur={validateEmail} />
              {emailError && <span className="error">{emailError}</span>}
              <input type="password" className="input" placeholder="Password"
                     value={password} onChange={e => setPassword(e.target.value)} onBlur={validatePassword} />
              {passwordError && <span className="error">{passwordError}</span>}
            </div>
            <button className="submit-btn">login</button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Login