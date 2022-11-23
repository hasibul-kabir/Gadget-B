import React from 'react'
import '../../CSS/login.css'
import FbLogin from './FbLogin'
import GmailLogin from './GmailLogin'
import GoogleLogin from './GoogleLogin'
import auth from '../../FirebaseConfig'
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom'
//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
    const [signInWithEmailAndPassword, eUser, eLoading, eError] = useSignInWithEmailAndPassword(auth);

    //redirect
    if (gUser || fUser || eUser) {
        navigate(location.state?.from ? location.state.from : '/', { replace: true })
    }

    //show error
    const customId = "custom-id-yes"; //to prevent duplication toast /an issue here 
    if (gError) {
        toast.error(gError.message.slice(10, gError.message.length), {
            position: toast.POSITION.TOP_CENTER,
            toastId: customId
        });
    }
    if (fError) {
        toast.error(fError.message.slice(10, fError.message.length), {
            position: toast.POSITION.TOP_CENTER,
            toastId: customId
        });
    }
    if (eError) {
        toast.error(eError.message.slice(10, eError.message.length), {
            position: toast.POSITION.TOP_CENTER,
            toastId: customId
        });
    }

    return (
        <div className='login'>
            <h2>Login here</h2>
            <ToastContainer autoClose={8000} />
            <div className='socialLogin' onClick={() => signInWithGoogle()}><GoogleLogin /></div>
            <div className='socialLogin' onClick={() => signInWithFacebook()}><FbLogin /></div>
            <p className='devideOr'>- or -</p>
            <div className='gmailLogin'><GmailLogin signInWithEmailAndPassword={signInWithEmailAndPassword} /></div>
        </div>
    )
}

export default Login