import React, { useState } from "react";
import api from './../services/authService'

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {

      const response = await api.post("/auth/register", { username, password });
      setSuccess("Registration successful! Please log in.");
      setError("");
    } catch (err) {
      setError("Registration failed. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-100 focus:outline-none"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-100 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-100 focus:outline-none"
              placeholder="Confirm your password"
              required
            />
          </div>
          {error && (
            <p className="text-sm text-red-500 mt-2 text-center">{error}</p>
          )}
          {success && (
            <p className="text-sm text-green-500 mt-2 text-center">{success}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;