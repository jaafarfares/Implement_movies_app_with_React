 import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Register from './Register';
import Login from './Login';
 /* 
import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Register from './Register';
import Login from './Login';

export default function Authentication(props) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    setSwitch(true);
  };

  const handleSignUp = () => {
    setSwitch(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submit button clicked');

    if (_switch) {
      // Sign In logic
      try {
        const response = await axios.post('/api/auth/login', {
          username,
          password,
        });
        const { token } = response.data;
        localStorage.setItem('token', token); // Store the token in localStorage
        props.setUserUsername(username); // Set the userUsername state to username
        props.setIsLoggedIn(true); // Set the isLoggedIn state to true
      } catch (error) {
        console.log('Sign In Error:', error);
      }
    } else {
      // Sign Up logic
      try {
        const response = await axios.post('/api/auth/register', {
          username,
          password,
        });
        const { token } = response.data;
        localStorage.setItem('token', token); // Store the token in localStorage
        props.setUserUsername(username); // Set the userUsername state to username
        props.setIsLoggedIn(true); // Set the isLoggedIn state to true
      } catch (error) {
        console.log('Sign Up Error:', error);
      }
    }
  };

  const handleDirectAccess = () => {
    props.setUserUsername('JohnDoe'); // Set the userUsername state to a default value
    props.setIsLoggedIn(true); // Set the isLoggedIn state to true
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div>
        <button className="header" onClick={handleSignIn}>
          Sign In
        </button>
        <button className="header" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
      {_switch ? (
        <>
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </>
      ) : (
        <>
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </>
      )}
      <button className="direct-access-button" onClick={handleDirectAccess}>
        Direct Access to Dashboard
      </button>
    </form>
  );
}
 */

export default function Authentication(props) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    setSwitch(true);
  };

  const handleSignUp = () => {
    setSwitch(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submit button clicked'); 

    if (_switch) {
      // Sign In logic
      try {
        const response = await axios.post('/api/auth/login', {
          username,
          password,
        });
        const { token } = response.data;
        localStorage.setItem('token', token); 
        props.setUserUsername(username); 
        props.setIsLoggedIn(true); 
      } catch (error) {
        console.log('Sign In Error:', error);
      }
    } else {
      // Sign Up logic
      try {
        const response = await axios.post('/api/auth/register', {
          username,
          password,
        });
        const { token } = response.data;
        localStorage.setItem('token', token); 
        props.setUserUsername(username); 
        props.setIsLoggedIn(true); 
      } catch (error) {
        console.log('Sign Up Error:', error);
      }
    }
  };

  return (
    <form className='container' onSubmit={handleSubmit}>
      <div>
        <button className='header' onClick={handleSignIn}>Sign In</button>
        <button className='header' onClick={handleSignUp}>Sign Up</button>
      </div>
      {_switch ? (
        <>
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </>
      ) : (
        <>
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </>
      )}
    </form>
  );
}
 
