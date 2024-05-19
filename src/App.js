import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import UserList from './components/UserList/UserList';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-end space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/user-list" className="hover:text-gray-300">User List</Link>
            </li>
          </ul>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/user-list" element={<UserList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
