import React from 'react';
import '../../CSS/googleLogin.css';
import { FcGoogle } from 'react-icons/fc';

const GoogleLogin = () => {
    return (
        <div className='g-login'>
            <FcGoogle className='g-icon' />
            <div><p>Login With Google</p></div>
        </div>
    )
}

export default GoogleLogin