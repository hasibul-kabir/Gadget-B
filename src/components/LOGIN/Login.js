import React from 'react'
import '../../CSS/login.css'
import FbLogin from './FbLogin'
import GmailLogin from './GmailLogin'
import GoogleLogin from './GoogleLogin'
import auth from '../../FirebaseConfig'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom'


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

    if (user) {
        navigate(location.state?.from ? location.state.from : '/', { replace: true })
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