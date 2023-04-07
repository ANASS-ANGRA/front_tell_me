import"./style/inscri.css"
import React, { useState } from 'react';

function Inscri() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function validateName() {
    if (!name.trim()) {
      setNameError('Please enter your name');
    } else {
      setNameError('');
    }
  }

  function validateUsername() {
    if (!username.trim()) {
      setUsernameError('Please enter a username');
    } else {
      setUsernameError('');
    }
  }

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
    validateName();
    validateUsername();
    validateEmail();
    validatePassword();
    // Check if there are any errors before submitting the form
    if (!nameError && !usernameError && !emailError && !passwordError) {
        //axios
    }
  }

  return (
    <div id="page_inscri">
      <div className="form-structor">
        <div className="signup">
          <h2 className="form-title" id="signup"><span>or</span>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-holder">
              <input type="text" className="input" placeholder="name utilisateur"
                     value={name} onChange={e => setName(e.target.value)} onBlur={validateName} />
              {nameError && <span className="error">{nameError}</span>}
              <input type="text" className="input" placeholder="Name"
                     value={username} onChange={e => setUsername(e.target.value)} onBlur={validateUsername} />
              {usernameError && <span className="error">{usernameError}</span>}
              <input type="email" className="input" placeholder="Email"
                     value={email} onChange={e => setEmail(e.target.value)} onBlur={validateEmail} />
              {emailError && <span className="error">{emailError}</span>}
              <input type="password" className="input" placeholder="Password"
                     value={password} onChange={e => setPassword(e.target.value)} onBlur={validatePassword} />
              {passwordError && <span className="error">{passwordError}</span>}
            </div>
            <button className="submit-btn">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Inscri