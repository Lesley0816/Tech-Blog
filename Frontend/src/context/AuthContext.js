import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  // Check if the user is already logged in when the component mounts
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
        } catch (error) {
          console.error('Failed to fetch user', error);
        }
      }
      setLoading(false);
    };
    checkUserLoggedIn();
  }, []);

  // Function to log in
  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      history.push('/');
    } catch (error) {
      console.error('Failed to log in', error);
      throw error;
    }
  };

  // Function to sign up
  const signUp = async (username, password) => {
    try {
      const response = await axios.post('/api/auth/signup', { username, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      history.push('/');
    } catch (error) {
      console.error('Failed to sign up', error);
      throw error;
    }
  };

  // Function to log out
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;