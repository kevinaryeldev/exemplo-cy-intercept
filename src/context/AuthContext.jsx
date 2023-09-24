import { createContext, useState } from "react";
import api from "../utils/api.js";
import { useNavigate } from "react-router";
import { useToast } from "@chakra-ui/react";


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const toast = useToast(
        {
            defaultOptions:{
                position:"bottom-right",
                duration: 5000,
                isClosable: true
            }
        }
    )

    const token = localStorage.getItem("userToken")

    const [user, setUser] = useState();
    const navigate = useNavigate();

    const handleLogin = async (user) => {
        try {
            const { data } = await api.post("/login", user);
            localStorage.setItem("userToken", JSON.stringify(data));
            navigate("/home");
        } catch (error) {
            if(error.response){
                toast({
                    title: error.code,
                    status: 'error',
                    description:error.response.data.message
                });
            }else{
                toast({
                    title: error.code,
                    status: 'error'
                });
            }
            
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
                const { data } = await api.get("/user",{headers:{
                    Authorization:token
                }});
                if(data){
                    setUser(data);
                }
            } catch (error) {
                if(error.response){
                    toast({
                        title: error.code,
                        status: 'error',
                        description:error.response.data.message
                    });
                }else{
                    toast({
                        title: error.code,
                        status: 'error'
                    });
                }
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