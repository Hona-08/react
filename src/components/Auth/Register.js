import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../utils/api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ name, email, password });
      alert('Registration successful! Redirecting to login...');
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Registration failed:', error.response.data);
      } else {
        console.error('Registration failed:', error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          className="w-full p-2 rounded bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Register
        </button>

      </form>
    </div>
  );
};

export default Register;
