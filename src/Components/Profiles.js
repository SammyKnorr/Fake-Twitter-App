import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

const User = (props) =>{
    return(
        <div className="user-container">
            <p>Name: {props.name}</p>
            <p>Birthday: {props.birthday}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

const Profile = () => {
let [name, setName] = useState("");
let [birthday, setBirthday] = useState("");
let [users, setUser] = useState([]);

// const [predictedAge, setPredictedAge] = useState(null);
//     useEffect(() => {
//     axios.get("https://api.agify.io/?name=" + name).then(response => setPredictedAge(response.data));
//     }, []); 

    return(
        <div>
        <p>Welcome to BINT(Because It's not Twitter)!</p>
        <p>This is the profiles page</p>
        <Link to="/Home">To Home!</Link>
        <p><Link to="/">To inital Page</Link></p>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <input value={birthday} onChange={e => setBirthday(e.target.value)}/>
        <button
        onClick={() => {
        axios .get("https://api.agify.io/?name=" + name).then(response => {
            setUser([...users, { name: name, birthday: birthday, age: response.data.age}])
            }) 
        }
        }>
        Add user profile
        </button>
        <div>
            <p>List of Users</p>
            {users.map( user => (
                <div>
                    <User name={user.name} birthday={user.birthday} age={user.age} /> 
                </div>
            ))}
        </div>
        </div>
    )
            };
    


export default Profile;