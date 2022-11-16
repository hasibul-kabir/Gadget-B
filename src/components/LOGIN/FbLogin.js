import React from 'react'
import '../../CSS/fbLogin.css'
import { FaFacebook } from 'react-icons/fa';

const FbLogin = () => {
    return (
        <div className='fb-login'>
            <FaFacebook className='fb-icon' />
            <p>Login With Facebook</p>
        </div>
    )
}

export default FbLogin