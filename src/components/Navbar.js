// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between shadow-lg">
      <h1 className="text-xl font-bold">AI Resume Builder</h1>
      <div className="space-x-4">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/resume">Resume</Link>
        <Link className="hover:underline" to="/portfolio">Portfolio</Link>
      </div>
    </nav>
  );
};

export default Navbar; // Ensure this is the only default export
