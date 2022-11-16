// import React, { useState } from 'react';
import '../../CSS/gmailLogin.css';

const GmailLogin = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    return (
        <form className='gmail-login-form'>
            <input required type='email' placeholder='Enter your email' />
            <input required type='password' placeholder='Enter your password' />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default GmailLogin