import React from 'react';
import useFormState from './useFormState';

export default function useInputFormState(params) {
    const [email, updateEmail, reset] = useFormState('');
    return (
        <div>
            <h2>You write here  {email}</h2>
            <input text={'text'} value={email} onChange={updateEmail} />
            <button onClick={reset}>Clear</button>
        </div>
    )
}