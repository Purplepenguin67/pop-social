// Update file

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        {/* <SignupForm /> */}
        <Homepage />
     
      </>
    </Router>
  );
}

export default App;
