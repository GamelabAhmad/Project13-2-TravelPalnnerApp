import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {

    if (!Cookies.get('accessToken')) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
