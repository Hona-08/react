import React, { useState } from 'react';
import axios from 'axios';

const DeleteProfile = ({ onDelete }) => {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      const token = localStorage.getItem('token');
      await axios.delete('http://localhost:5000/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      onDelete();
    } catch (err) {
      setError('Failed to delete profile');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Delete Profile</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <button onClick={handleDelete} disabled={deleting} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        {deleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
};

export default DeleteProfile;
