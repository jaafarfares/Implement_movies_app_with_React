import React from 'react';
import './auth.css';

export default function Register({ username, password, setUsername, setPassword }) {
  return (
    <div>
      <h2 className="heading">Create a new account</h2>
      <div className="input-container">
        <i className="fas fa-user icon"></i>
        <input
          className="form"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="input-container">
        <i className="fas fa-lock icon"></i>
        <input
          className="form"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="off"
        />
      </div>
      <button className="button" type="submit">Sign Up</button>
    </div>
  );
}
