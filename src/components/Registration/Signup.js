import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import '../../CSS/signup.css';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification, getAuth } from "firebase/auth";
// import auth from '../../FirebaseConfig';


const Signup = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLoading(false)
                // Update user
                updateProfile(auth.currentUser, {
                    displayName: name
                });

                //send varification mail
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        navigate('/login', { state: { msg: 'We have sent you a mail! Please varify and login.' } });
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                setLoading(false)
                // ..
            });
    }



    return (
        <div className='signup'>
            <h2>Register Now</h2>
            {
                error &&
                <p style={{ fontWeight: 600, color: 'red' }}>{error}</p>
            }
            <form onSubmit={handleRegistration}>
                <input type='text' placeholder='Enter your full name' onBlur={(e) => setName(e.target.value)} />
                <input type='email' placeholder='Enter your email' onBlur={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Enter your password' onBlur={(e) => setPassword(e.target.value)} />
                {
                    !error && loading ?
                        <button>Loading...</button>
                        :
                        <button onClick={handleRegistration}>SignUp</button>
                }
            </form>
            <p className='bottomRegister-txt'>Already registered? <Link to='/login'>Login</Link> Now.</p>
        </div>
    )
}

export default Signup