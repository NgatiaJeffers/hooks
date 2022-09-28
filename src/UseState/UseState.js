import React, { useState } from "react";

const UseState = () => {
    let [counter, setCounter] = useState(0);
    let [inputValue, setInputValue] = useState("Termito");

    const increment = () => {
        setCounter(counter += 1);
    }

    let onChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue)
    }

    return (
        <div>
            
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <br />
            <input placeholder="enter something..." onChange={onChange}/>
            <br />
            <h2>{inputValue}</h2>
            
        </div>
    )
}

export default UseState;