import React, { useEffect } from "react";
import Header from "./Components/Body.js";
import Body from "./Components/Header.js";
import  "./Styles/TweetStyle.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from "./Components/Profiles.js";
import Home from "./Components/Home.js";
// import firestore from "./firebase";
// import { collection, getDocs } from "firebase/firestore/lite";

const App = () => {
  // useEffect(() => {

  //   let tweetPosts = collection(firestore, "Tweets");
  //   getDocs(tweetPosts).then(snapshot => {
  //       //snapshots is an array of all the documents in collection
  //       let tempPosts = []
  //       snapshot.forEach(document => {
  //       tempPosts.push(document.data());
  //       })
  //       setTweets(tempPosts);
  //   });
  // }, []);

  return (
    <Router>
    <div>
    <Header />
    <Body />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/">
          <div className = "initial">
          <p>Links to other pages</p>
          <div className = "initallinks">
          <p><Link to="/profile">To Profiles!</Link> </p>
          <p><Link to="/Home">To Home!</Link></p>
          </div>
          </div>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}



export default App;
