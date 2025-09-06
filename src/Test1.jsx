import React, { useState } from 'react';
import './Test.css';

function Test() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My React App</h1>
                <p>This is a simple counter app</p>
                <div className="counter">
                    <button onClick={decrement}>Decrement</button>
                    <span>{counter}</span>
                    <button onClick={increment}>Increment</button>
                </div>
            </header>
        </div>
    );
}

export default Test;