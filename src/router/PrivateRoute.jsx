import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import loadding from '../assets/lottiereact/loading.json';
import Lottie from 'lottie-react';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext);
    const location = useLocation();
    if(loading){
        return <>
            <Lottie animationData={loadding}></Lottie>
        </>
    }
    if(!user){
        return <Navigate to='/auth/signin' state={location?.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;