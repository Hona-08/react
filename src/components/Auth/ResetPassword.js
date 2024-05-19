import React, { useState } from 'react';
import { resetPassword } from '../../utils/api';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Please enter your email.');
      return; // Exit early if email field is empty
    }
    try {
      await resetPassword({ email });
      alert('Password reset link has been sent to your email.');
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage('Password reset failed:', error.response.data);
      } else {
        setErrorMessage('Password reset failed:', error.message);
      }
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Reset Password
        </button>
        {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
