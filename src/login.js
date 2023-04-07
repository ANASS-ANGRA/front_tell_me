import "./style/login.css"

import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
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
      // Submit the form
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