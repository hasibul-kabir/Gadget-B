import '../CSS/nav.css';
import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../FirebaseConfig';
import { signOut } from 'firebase/auth';
import useAuthUser from '../Hooks/Authentications/useAuthUser';


function Nav() {
    const navigate = useNavigate();
    const { user } = useAuthUser(auth);

    const handleLogout = () => {
        signOut(auth)
            .then(navigate('/'))
    }
    return (
        <>
            <div className='nav'>
                <img src='./Images/Gadgets b.png' alt='brand' />
                <div className='nav-item'>
                    <Link to='/'>Home</Link>
                    <Link to='/order_summary'>Order summary</Link>
                    {
                        user ?
                            <button onClick={handleLogout}>Logout</button>
                            :
                            <Link to='/login'>Login</Link>
                    }
                </div>

                <div className='responsive-menu'>
                    <BiMenu />
                </div>
            </div>
        </>
    )
}

export default Nav