import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../utils/api.js";
import { useNavigate } from "react-router";


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const token = localStorage.getItem("userToken")

    const [user, setUser] = useState();
    const navigate = useNavigate();

    const handleLogin = async (user) => {
        try {
            const { data } = await api.post("/login", user);
            localStorage.setItem("userToken", JSON.stringify(data));
            navigate("/home");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const logout = () => {
        localStorage.removeItem("userToken");
        setUser(null);
        navigate("/");
    };

    const getUserData = async () => {
        if (token){
            try {
                const { data } = await api.get("/user");
                setUser(data);
            } catch (error) {
                toast.error(error.response.data.message);
                logout();
            }
        }
    };


    return (
        <AuthContext.Provider value={{ user,token, handleLogin, getUserData, logout }}>
            {children}
        </AuthContext.Provider>
    );
}