import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import makeAdmin from '../Pages/Hooks/makeAdmin';
import Loading from '../Pages/Misc/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = makeAdmin(user)
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        signOut(auth);
        localStorage.removeItem('accessToken')
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    }
    return children;
};

export default RequireAdmin;