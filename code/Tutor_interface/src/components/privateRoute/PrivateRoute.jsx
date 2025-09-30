import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {useUser} from "../../contexts/UserContext.jsx";

const PrivateRoute = ({ children }) => {
    const { user } = useUser();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/teacherLogin" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;