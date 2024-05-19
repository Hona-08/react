import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-lg mb-8">This is the best app for managing your profile and more.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Login</Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Register</Link>
      </div>
    </div>
  );
};

export default Home;
