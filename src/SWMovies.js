import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SWMovies(params) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h1>Pick a Random Movie!</h1>
            <h2>You have chosen: {number}</h2>
            <select value={number} onChange={e => setNumber(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>
        </div>
    )
}

export default SWMovies;