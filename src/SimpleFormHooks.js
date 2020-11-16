import React, {useState} from 'react';

export default function SimpleFormHooks(params) {
    const [email, setEmail] = useState('');
    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    return (
        <div>
            <h2>You write here {email}</h2>
            <input text={'text'} value={email} onChange={handleChange} />
            <button onClick={() => setEmail('')}>Clear</button>
        </div>
    )
}