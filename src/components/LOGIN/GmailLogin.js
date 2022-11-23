import React, { useState } from 'react';
import '../../CSS/gmailLogin.css';

const GmailLogin = ({ signInWithEmailAndPassword }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <form className='gmail-login-form' onSubmit={handleSubmit}>
            <input required type='email' placeholder='Enter your email' onBlur={(e) => setEmail(e.target.value)} />
            <input required type='password' placeholder='Enter your password' onBlur={(e) => setPassword(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default GmailLogin