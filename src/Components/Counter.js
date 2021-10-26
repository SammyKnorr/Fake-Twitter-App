import React, { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Likes: {count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}
            >Like
            </button>
            <button onClick={() => {
                setCount(count - 1);
            }}
            >Dislike
            </button>
            <button onClick={() => {
                setCount(0);
            }}>
                Clear Count
            </button>

        </div>

    );
};

export default Counter;