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
            {counter} <button onClick={increment}>Increment</button>

            <br />
            <input placeholder="enter something..." onChange={onChange}/>

            {inputValue}

        </div>
    )
}

export default UseState;