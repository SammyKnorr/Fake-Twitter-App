import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Tweet from "./Tweet";
import firestore from "./firebase";
import { collection, doc, setDoc, getDocs, addDoc } from "firebase/firestore/lite";

const Home = () => {
    let [author, setAuthor] = useState("");
    let [content, setContent] = useState("");
    let [date, setDate] = useState("");
    let [tweets, setTweets] = useState([]);
    useEffect(() => {

      let tweetPosts = collection(firestore, "Tweets");
      getDocs(tweetPosts).then(snapshot => {
          //snapshots is an array of all the documents in collection
          let tempPosts = []
          snapshot.forEach(document => {
          tempPosts.push(document.data());
          })
          setTweets(tempPosts);
      });
    }, []);


    console.log(tweets);
    addDoc(collection(firestore, "Tweets"), tweets[0]);

    return (
        <div>
            <p>This is the Tweets Page page</p>
            <Link to="/profile">Link to profiles</Link>
            <p><Link to="/">To inital page</Link></p>
    <input value={author} onChange={e => setAuthor(e.target.value)} />
    <input value={content} onChange={e => setContent(e.target.value)} />
    <input value={date} onChange={e => setDate(e.target.value)} />
    <button
      onClick={() =>
        setTweets([...tweets, { author: author, content: content, date: date }])
      }
      >
        Add User's Tweet
      </button>
      <div> 
        <p> list of Tweets: </p>
        
        {tweets
        // .filter(tweet => !(tweet.author.includes("")))
        .map( tweet=>  (
          <div>
             <Tweet author={tweet.author} content={tweet.content} date={tweet.date} />
          </div>
        )
        )}
        
      </div>
        </div>
    )
    
}



export default Home;
