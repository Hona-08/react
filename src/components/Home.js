import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../img/login.png';
import myImage1 from '../img/profile.png';
import myImage2 from '../img/register.png';
import myImage3 from '../img/reset.png';
import myImage4 from '../img/userlist.png';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="relative w-64 h-64 mb-8">
        
      </div>
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-lg mb-8">This is the best app for managing your profile and more.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Login</Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Register</Link>
      </div><br>
      </br><br>
      </br><br>
      </br>
      <h1 className="text-4xl font-bold mb-4">These are some screenshot this project</h1>
      <img src={myImage} alt="Description" className="w-full h-full object-cover" />
      <img src={myImage1} alt="Description" className="w-full h-full object-cover" />
      <img src={myImage2} alt="Description" className="w-full h-full object-cover" />
      <img src={myImage3} alt="Description" className="w-full h-full object-cover" />
      <img src={myImage4} alt="Description" className="w-full h-full object-cover" />
    </div>
  );
};

export default Home;
