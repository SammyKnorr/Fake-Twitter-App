import React from "react";
import Header from "./Components/Body.js";
import Body from "./Components/Header.js";
import  "./Styles/TweetStyle.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Profile from "./Components/Profiles.js";
import Home from "./Components/Home.js";

const App = () => {
  return (
    <Router>
    <div>
    <Header />
    <Body />
      <Switch>
        <Route path="/">
          
          </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}



export default App;
