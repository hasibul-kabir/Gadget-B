import '../CSS/nav.css';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Brand from '../assets/Images/Brand.png';
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
            <div className='nav-bar'>
                <img src={Brand} alt='brand' />
                <div className='nav-item'>
                    <Link to='/'>Home</Link>
                    <Link to='/order_summary'>Cart</Link>
                    {
                        user ?
                            <p onClick={handleLogout}>Logout</p>
                            :
                            <Link to='/login'>Login</Link>
                    }
                </div>

                <div className='responsive-menu'>
                    <Dropdown>
                        <Dropdown.Toggle className='btn' />

                        <Dropdown.Menu>
                            <Dropdown.Item><Link to='/'>Home</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/order_summary'>Order summary</Link></Dropdown.Item>
                            {
                                user ?
                                    <>
                                        <Dropdown.Item><Link>Orders</Link></Dropdown.Item>
                                        <Dropdown.Item><p onClick={handleLogout}>Logout</p></Dropdown.Item>
                                    </>
                                    :
                                    <>
                                        <Dropdown.Item><Link to='/login'>Login</Link></Dropdown.Item>
                                    </>
                            }
                        </Dropdown.Menu>

                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export default Nav