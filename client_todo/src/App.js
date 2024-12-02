import './App.css';
import React from 'react';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import CreateTodo from './components/CreateTodo';
function App() {
  return (
   <Router>
    <header>React Testing Here</header>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create" element={<CreateTodo />}/>
    </Routes>
   </Router>
  );
}

export default App;
