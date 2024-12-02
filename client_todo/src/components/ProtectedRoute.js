import React, { useContext } from 'react';
import { AuthContext } from '../authContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    console.log('USER IS NULL',user == null)
    if (loading) {
        return (
          <div className="min-h-screen flex items-center justify-center">
            <p>Loading...</p>
          </div>
        ); // Optional: Replace with a loading spinner or component
    }
    return user == null ? <Navigate to="/login" /> : children

}

export default ProtectedRoute;
