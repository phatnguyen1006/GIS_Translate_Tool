import React, { createContext, useReducer, useState } from 'react';

export const AuthContext = createContext<any>({});


// Step 1:
interface IAuthContextInterface {
    isLoggedIn: boolean;
}

// Step 3
const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;