import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data);
            setAuth(result);
            console.log(result);
            navigate('/');
        } catch (error) {
            console.log('There is a problem');
        };

    };

    const onRegisterSubmit = async (values) => {

        const { repeatPassword, ...registerData } = values;
        if (repeatPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log('There is a problem');
        }

    };
    const onLogout = async () => {
        await authService.logout();
        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        userFirstName: auth.firstName,
        isAuthenticated: !!auth.accessToken,
    };


    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
};

