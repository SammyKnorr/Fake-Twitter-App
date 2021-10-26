import React, { useState } from "react";

const Counter = (button) => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <h1>Likes: {count}</h1>
            <button className="counter" onClick={() => {
                setCount(count + 1); 
            }}><img src="https://cdn1.iconfinder.com/data/icons/valentine-emoticon-flat/64/love-11-512.png" alt="" width="20" height="20"/></button>
            <button className="counter" onClick={() => {
                setCount(count - 1);
            }}><img src="https://www.pngkit.com/png/detail/28-287161_instagram-like-button-png-grey-heart.png" alt="" width="20" height="20"/></button>
            <p class="counter">{button.counter}</p>
        </div>
    );
};

const Dislike = (button) => {
    const [count, setCount] = useState(0);
    
    return (
        <div className="dislike-container">
            <h1>Dislikes: {count}</h1>
            <button className="dislike" onClick={() => {
                setCount(count + 1);
            }}><img src="https://pocketnow.com/files/2019/02/YouTube-dislike-button.jpg" alt="" width="20" height="20"/></button>
            <button className="dislike" onClick={() => {
                setCount(count === 0);
            }}> Clear Dislike</button>
            <p class="dislike">{button.dislike}</p>
        </div>
    )
}

const Retweet = (button) => {
    const [count, setCount] = useState(0);

    return (
        <div className="retweet-container">
            <h1>Retweets: {count}</h1>
            <div className="retweet" onClick={() => {
                setCount(count + 1);
            }}><img src="https://everything-pr.com/wp-content/uploads/2012/03/Retweet.jpg" alt="" width="20" height="20"/></div>
            <button className="retweet" onClick={() => {
                setCount(count === 0);
            }}>Clear Retweet</button>
            <p class="retweet">{button.retweet}</p>
        </div>
    )
}

const Tweet = (props) =>{
    return(
        <div className="tweet-container">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>{props.author}</p>
            <p> Date: {props.date}</p>
            <p>{props.likes}</p>
            <div className="button-container">
            <p>
            <Counter />
            </p>
            <p>
            <Dislike />
            </p>
            <p>
            <Retweet />
            </p>
            </div>
        </div>
    );
    
};


export default Tweet;