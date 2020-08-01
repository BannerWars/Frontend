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
import CreateTeam from "./pages/CreateTeam"
import Lobbies from "./pages/Lobbies"
import Lobby from "./pages/Lobby"
import MyTeam from "./pages/MyTeam"
import OtherTeam from "./pages/OtherTeam"
import LogOut from "./pages/LogOut"
import CheckEmail from "./pages/CheckEmail"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lobbies" component={Lobbies} />
          <Route exact path="/create-lobby/" component={CreateLobby} />
          <Route exact path="/lobbies/:id" component={Lobby} />
          <Route exact path="/my-team" component={MyTeam} />
          <Route exact path="/lobbies/:lobbyId/:teamIndex" component={OtherTeam} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/verify/:id" component={Verification} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/invite-friends" component={InviteFriends} />
          <Route exact path="/create-team/:id" component={CreateTeam} />
          <Route exact path="/log-out" component={LogOut} />
          <Route exact path="/check-email" component={CheckEmail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
