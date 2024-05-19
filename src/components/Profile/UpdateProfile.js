import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfile = ({ profile, onUpdate }) => {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        'http://localhost:5000/api/auth/profile',
        { name, email },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      onUpdate(response.data);
    } catch (err) {
      setError('Failed to update profile');
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Update Profile</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input mt-1 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input mt-1 text-black"
          />
        </div>
        <button type="submit" disabled={updating} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {updating ? 'Updating...' : 'Update'}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
