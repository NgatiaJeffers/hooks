import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response?.data[10]?.email);
                console.log("API WAS CALLED!");
            });
    }, []);

    return (
        <div>
            <h2>Hello World</h2>
            <br />
            <h1>{data}</h1>
        </div>
    )

}

export default UseEffect;
