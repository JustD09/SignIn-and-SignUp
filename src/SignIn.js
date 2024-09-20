import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      <h2 className="mb-6 text-3xl font-bold text-blue-900">Sign In Access</h2>
      <h6>Please login first to access the page!</h6>
      <form className="w-full max-w-sm">
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

        {/* Sign In Button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-900 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Link to Sign Up */}
      <p className="mt-4">
        Not registered?{" "}
        <Link
          to="/signup"
          className="text-blue-500 dark:text-blue-300 hover:underline"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
