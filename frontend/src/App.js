import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// import Home from "./pages/Home"
// import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <LogIn />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
