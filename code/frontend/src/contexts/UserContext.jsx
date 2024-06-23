// src/contexts/UserContext.js

import React, { createContext, useContext, useState } from 'react';

// Create a Context for the user data
const UserContext = createContext();

// This component will be used to wrap parts of the app where you need access to user data
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);
