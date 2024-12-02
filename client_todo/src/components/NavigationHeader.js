import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";


const NavigationHeader = () => {
  const { user, logout } = useContext(AuthContext); // Access user and logout from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div>
        <Link to="/" className="text-xl font-bold text-gray-800">
          TODO APP
        </Link>
      </div>

      <nav className="flex items-center space-x-4">
        {user ? (
          <>
            {/* Display user profile */}
            <span className="text-gray-700 font-medium">Hello, {user.name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
                
          </>
        )}
      </nav>
    </header>
  );
};

export default NavigationHeader;