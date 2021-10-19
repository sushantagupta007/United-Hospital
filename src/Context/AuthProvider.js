

import React, { createContext } from 'react';

import useFire from './../Component/Hooks/useFire';


export const AuthContext = createContext() 
const AuthProvider = ({children}) => {
    const allContext = useFire(); 
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;