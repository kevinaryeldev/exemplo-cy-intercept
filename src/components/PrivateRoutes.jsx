import { useContext, useLayoutEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Box,Spinner } from "@chakra-ui/react";
import {useState} from 'react'

const PrivateRoutes = () => {

    const {getUserData,token,user} = useContext(AuthContext)

    const [auth, setAuth] = useState(false);
    
    useLayoutEffect(() =>{
        if (user){
            setAuth(true)
        } else {
            if(token){
                getUserData();
            } else {
                setAuth(false)
            }
        }
    },[user,token]);

    return( 
        auth ? <Outlet/> :
         token && !auth? 
            <Box minH={"100vh"} maxWidth={"full"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    width={"10vw"}
                    height={"10vw"}
                />
            </Box> :
        <Navigate to={"/"}/>
    )
}

export default PrivateRoutes;