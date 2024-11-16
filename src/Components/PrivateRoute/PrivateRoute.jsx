import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const Location = useLocation()
    if(loader){
        return <>
         <div className="flex min-h-screen justify-center items-center">
        <span className="loading loading-spinner text-error"></span>
        </div></>
    }
    if(user){
        return children
    }
    return <Navigate state={Location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;