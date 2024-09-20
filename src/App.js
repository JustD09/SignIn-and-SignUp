import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Router>
        {/* Dark Mode Toggle */}
        <div className="flex justify-end p-5">
          <nav className="bg-white dark:bg-gray-800">
            <ul className="flex justify-between">
              <li>
                <button
                  onClick={toggleDarkMode}
                  className="p-1 bg-indigo-600 text-white rounded-mt"
                >
                  {darkMode ? (
                    <FontAwesomeIcon icon={faSun} className="text-yellow-400" />
                  ) : (
                    <FontAwesomeIcon icon={faMoon} className="text-blue-400" />
                  )}
                </button>
              </li>
            </ul>
          </nav>
          {/* <button onClick={toggleDarkMode} className="text-xl">
            {darkMode ? (
              <i className="fas fa-sun"></i> // Icon matahari
            ) : (
              <i className="fas fa-moon"></i> // Icon bulan
            )}
          </button> */}
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
