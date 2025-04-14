import React, { useState } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true); 
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md transition-all duration-500 ease-in-out transform hover:scale-105">
        <div className="flex justify-between mb-6">
          <button
            className={`w-1/2 py-2 text-lg font-semibold transition-all duration-300 ease-in-out ${
              isLogin ? 'border-b-4 border-black-500 text-black-500' : 'text-gray-500 hover:text-teal-500'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 text-lg font-semibold transition-all duration-300 ease-in-out ${
              !isLogin ? 'border-b-4 border-black-500 text-black-500' : 'text-gray-500 hover:text-teal-500'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <form className="space-y-6 transition-all duration-500 ease-in-out">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-600 text-white py-3 rounded-md hover:bg-black transition-all duration-300 ease-in-out"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="space-y-6 transition-all duration-500 ease-in-out">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="Enter your first name"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter your last name"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-600 text-white py-3 rounded-md hover:bg-black transition-all duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;