import React, {useState} from 'react';
function CounterHooks(params) {
    const [count, setCount] = useState(10)
    // 1. The piece of state
    // 2, function to update that piece of state

    return (
        <div>
        <h1>The Count is: {count}</h1>
        <button onClick={ () => setCount(count + 1)}>Add 1</button>
    </div>
    )
}

export default CounterHooks