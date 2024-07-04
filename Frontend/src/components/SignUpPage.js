import React, { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    axios.post('/api/signup', { username, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
      })
      .catch(error => {
        console.error("There was an error signing up!", error);
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUpPage;
