import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {
    
    let counterValue = useContext(counterContext);
    return (
        <div>
            <h2>This is the first Child</h2>
            <h3>This is the second child {counterValue}</h3>

            <button></button>
        </div>
    )
}


export default Child;