import React from 'react'
import '../../CSS/login.css'
import FbLogin from './FbLogin'
import GmailLogin from './GmailLogin'
import GoogleLogin from './GoogleLogin'
import auth from '../../Firebase.config'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        navigate('/')
    }
    // if (loading) {
    //     return <p>Loading...</p>
    // }
    if (error) {
        console.log(error.message);
    }

    return (
        <div className='login'>
            <h2>Login here</h2>
            <div className='socialLogin' onClick={() => signInWithGoogle()}><GoogleLogin /></div>
            <div className='socialLogin'><FbLogin /></div>
            <p className='devideOr'>- or -</p>
            <div className='gmailLogin'><GmailLogin /></div>
        </div>
    )
}

export default Login