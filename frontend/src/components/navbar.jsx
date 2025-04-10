import { Menu, UserCircle, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Brand Name with Logo Aligned Left */}
        <div className="flex-1 flex items-center space-x-2">
          <img src='/logo1.png' alt="Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-white">ShopWeaver</span>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation and Profile */}
        <div
          className={`w-full md:w-auto flex-1 md:flex md:justify-end md:items-center text-white font-medium transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400">About</a>
            <a href="#" className="hover:text-blue-400">Login</a>
            <a href="#" className="hover:text-blue-400">Contact</a>

            {/* Profile Dropdown */}
            <div className="relative md:ml-6">
              <button
                onClick={toggleProfile}
                className="flex items-center space-x-1 hover:text-blue-400"
              >
                <UserCircle className="w-7 h-7" />
                <span className="hidden lg:inline">Profile</span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded shadow-lg z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
