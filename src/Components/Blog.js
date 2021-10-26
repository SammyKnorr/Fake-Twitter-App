import React from "react";

const Blog = (props) =>{
    return(
        <div>
            <h2>{props.title}</h2>
            <p2>{props.content}</p2>
            <p>{props.likes}</p>
        </div>
    );
};

export default Blog;