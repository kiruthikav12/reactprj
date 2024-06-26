import React, { useState } from 'react';
import Navbar from "../Navbar";
import './index.css';
const Login = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const isEmailValid = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    let errorMessage = '';

  
    if (username.trim() === '' || username.length < 5) {
      errorMessage += 'Username must be at least 5 characters.\n';
    }

  
    if (password.trim() === '' || password.length < 8) {
      errorMessage += 'Password must be at least 8 characters.\n';
    }

    // Check if email is filled and has a valid format
    if (email.trim() === '' || !isEmailValid(email)) {
      errorMessage += 'Please provide a valid email address.\n';
    }

    if (errorMessage !== '') {
      alert(errorMessage);
    } else {
      setIsRegistered(true);
      setIsLogin(true);
      alert('Registration successful! You can now log in.');
    }
  };

  const handleLogin = () => {
    if (loginUsername.length >= 5 && loginPassword.length >= 8) {
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleReset = () => {
    setIsRegistered(false);
    setUsername('');
    setPassword('');
    setEmail('');
    setLoginUsername('');
    setLoginPassword('');
  };

  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
    <Navbar/>
    <div className="section">
      {isRegistered ? (
        <div>
          <h2>Registration Successful!</h2>
          <p>You can now log in.</p>
          <button onClick={handleReset}>Login</button>
        </div>
      ) : isLogin ? (
        <div>
          <h2>LOGIN</h2>
          <label>
            Username:
            <input type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
          <br />
          <p>Don't have an account? <button onClick={togglePage}>Sign Up</button></p>
        </div>
      ) : (
        <div>
          <h2>Sign Up</h2>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <button onClick={handleSignUp}>Sign Up</button>
          <br />
          <p>Already have an account? <button onClick={togglePage}>Login</button></p>
        </div>
      )}
    </div>
   </>
  );
};

export default Login;