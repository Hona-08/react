import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateProfile from './UpdateProfile';
import DeleteProfile from './DeleteProfile';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProfile(response.data);
      } catch (err) {
        setError('Failed to fetch profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  const handleDelete = () => {
    // Logic to handle profile deletion (e.g., redirect to login page)
    setProfile(null); // Clear profile data after deletion
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Profile</h1>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        {/* Add more fields as needed */}
      </div>
      <UpdateProfile profile={profile} onUpdate={handleUpdate} />
      <DeleteProfile onDelete={handleDelete} />
    </div>
  );
};

export default Profile;
