import React, { useContext, useState } from 'react';
import { AuthContext } from '../authContext';
import {authService} from '../services/authService'
const Login = () => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const result = await authService.login(username,password)
    //   const response = await api.post("/auth/login", { username, password });
      login(result.data.token);

    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
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
          {error && (
            <p className="text-sm text-red-500 mt-2 text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
