import './App.css';
import React from 'react';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import CreateTodo from './components/CreateTodo';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './authContext';
import Login from './components/Login';
import NavigationHeader from './components/NavigationHeader';
function App() {
  return (
    
      <Router>
        
        <AuthProvider>
        <NavigationHeader className=""/>

        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          <Route path="/create" element={<CreateTodo />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
        </AuthProvider>
      </Router>

  );
}

export default App;
