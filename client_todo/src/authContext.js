import React,{createContext, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    
    const navigate = useNavigate();


    const login = (token) => {
        localStorage.setItem("token",token)
        setUser({token})
        navigate('/')
    }
    
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
      };
    
    const checkAuth = () => {
        const token = localStorage.getItem("token");
        if (token) {
            setUser({ token });
        }
        setLoading(false)
        console.log('GET TOKEN ',token)
    }
    
    useEffect(() => {
        checkAuth();
    }, []);


    return (
        <AuthContext.Provider value={{ user, login, logout,loading }}>
          {children}
        </AuthContext.Provider>
      );
}