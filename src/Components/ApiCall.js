import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiCall = () => {
    const [predictedAge, setPredictedAge] = useState(null);
    let name = "Dave"
    useEffect(() => {
    axios.get("https://api.agify.io/?name=Samuel" + name).then(response => setPredictedAge(response.data));
    }, []); 

    return(
        <div>
            Predicted Age: {predictedAge}
        </div>
    )
};

export default ApiCall;