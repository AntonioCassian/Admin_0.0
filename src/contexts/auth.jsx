import React,{ createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);

    }, []);

    const login = (name, password) => {
        console.log("login auth", {name, password});

        const loggedUser = {
            id: "123",
            name,
        };

        localStorage.setItem("user", JSON.stringify (loggedUser));

        if(name === "antonio" && password === "1234567"){
            setUser({id: '123', name});
            navigate('/');
        }
    };
    
    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };
    
    return(
        <AuthContext.Provider value={{authenticated: !!user, loading, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}