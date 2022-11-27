import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import auth from '../../FirebaseConfig';

import useAuthUser from '../../Hooks/Authentications/useAuthUser';

const PrivateOutlet = () => {
    const location = useLocation();
    const { user, loading } = useAuthUser(auth);

    if (loading) {
        return <p style={{ textAlign: 'center' }}>Loading...</p>
    }
    return user ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateOutlet