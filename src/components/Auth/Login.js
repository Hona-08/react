import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/api';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        throw new Error('Please fill in all fields.');
      }
      await login({ email, password });
      setSuccessMessage('Login successful! Redirecting...');
      navigate('/profile');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage('Invalid email or password. Please try again.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
      
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded  bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
        <Link to="/reset-password" className="flex items-center justify-center m-3 bg-green-500 text-white px-8 py-2 rounded hover:bg-green-700">Reset Password</Link>
      </form>
    </div>
  );
};

export default Login;
