import '../CSS/nav.css'
import React from 'react'
import { Link } from 'react-router-dom';
import auth from '../Firebase.config';
import useAuthUser from '../Hooks/Authentications/useAuthUser';

function Nav() {
    const { user } = useAuthUser(auth);

    return (
        <div className='nav'>
            <img src='./Images/Gadgets b.png' alt='brand' />
            <div className='nav-item'>
                <Link to='/'>Home</Link>
                <Link to='/order_summary'>Order summary</Link>
                {
                    user ?
                        <Link>Logout</Link>
                        :
                        <Link to='/login'>Login</Link>
                }
            </div>
        </div>
    )
}

export default Nav