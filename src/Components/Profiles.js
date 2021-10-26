import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const User = (props) =>{
    return(
        <div className="user-container">
            <p>Name: {props.name}</p>
            <p>Birthday: {props.birthday}</p>
        </div>
    )
}

const Profile = () => {
let [name, setName] = useState("");
let [birthday, setBirthday] = useState("");
let [users, setUser] = useState([]);
    return(
        <div>
        <p>Welcome to BINT(Because It's not Twitter)!</p>
        <Link to="/Home">To Home!</Link>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <input value={birthday} onChange={e => setBirthday(e.target.value)}/>
        <button
        onClick={() => 
        setUser([...users, { name: name, birthday: birthday}])
        }>
        Add user profile
        </button>
        <div>
            <p>List of Users</p>
            {users.map( user => (
                <div>
                    <User name={user.name} birthday={user.birthday}/>
                </div>
            ))}
        </div>
        </div>
    )
            }
    // let [author, setAuthor] = useState("");
    // let [content, setContent] = useState("");
    // let [date, setDate] = useState("");
    // let [tweets, setTweets] = useState([]);
    // return (
    //     <div>
    //         <p>This is the profiles page</p>
    //         <Link to="/home">Link to Home</Link>
    // <input value={author} onChange={e => setAuthor(e.target.value)} />
    // <input value={content} onChange={e => setContent(e.target.value)} />
    // <input value={date} onChange={e => setDate(e.target.value)} />
    // <button
    //   onClick={() =>
    //     setTweets([...tweets, { author: author, content: content, date: date }])
    //   }
    //   >
    //     Add User's Tweet
    //   </button>
    //   <div> 
    //     <p> list of Tweets: </p>
        
    //     {tweets.map( tweet=>  (
    //       <div>
    //          <Tweet author={tweet.author} content={tweet.content} date={tweet.date} />
    //       </div>
    //     )
    //     )}
        
    //   </div>
    //     </div>
    


export default Profile;