import React from 'react';
import LoginForm from '../components/LoginForm';
import axios from 'axios';

const LoginPage = () => {
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';
  const handleLogin = async ({ email, password }) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      window.location.href = '/dashboard';
    } catch (err) {
      console.error('Login error:', err);
      const errorMessage = err.response?.data?.message || 
        err.message || 
        'An error occurred during login';
      alert(errorMessage);
    }
  };

  return <LoginForm onSubmit={handleLogin} />;
};

export default LoginPage;
