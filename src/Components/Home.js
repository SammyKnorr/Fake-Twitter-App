import React, { useState } from "react";
import {Link} from "react-router-dom";
import Tweet from "./Tweet";


const Home = () => {
    let [author, setAuthor] = useState("");
    let [content, setContent] = useState("");
    let [date, setDate] = useState("");
    let [tweets, setTweets] = useState([]);
    return (
        <div>
            <p>This is the profiles page</p>
            <Link to="/profiles">Link to profiles</Link>
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
        
        {tweets.map( tweet=>  (
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
