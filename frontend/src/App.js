import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import ForgotPassword from "./pages/ForgotPassword"
import Verification from "./pages/Verification"
import ResetPassword from './pages/ResetPassword'
import CreateLobby from "./pages/CreateLobby"
import InviteFriends from "./pages/InviteFriends"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/verification" component={Verification} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/create-lobby" component={CreateLobby} />
          <Route exact path="/invite-friends" component={InviteFriends} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
