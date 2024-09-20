import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      <h2 className="mb-6 text-3xl font-bold text-green-500">Sign Up Access</h2>
      <h6>Create your account in to get access</h6>
      <form className="w-full max-w-sm">
        {/* Username input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Password input */}
        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        {/* Register Button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-900 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Register
          </button>
        </div>
      </form>

      {/* Link to Sign In */}
      <p className="mt-4">
        Already have an account?{" "}
        <Link
          to="/signin"
          className="text-blue-500 dark:text-blue-300 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
