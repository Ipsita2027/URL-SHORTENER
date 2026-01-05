import React from 'react';
import { Link } from '@tanstack/react-router';
import AuthButton from "../components/AuthButton";
function Navbar() {
  return (
<nav className="bg-white border border-b-black">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      
      {/* App name (left) */}
      <Link to="/" className="text-xl font-bold text-gray-800">
        URL Shortener
      </Link>
      <AuthButton/>
    </div>
  </div>
</nav>
  );
};

export default Navbar;