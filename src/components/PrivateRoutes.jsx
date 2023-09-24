import { useContext, useLayoutEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Box,Spinner } from "@chakra-ui/react";

const PrivateRoutes = () => {

    const {getUserData,token,user} = useContext(AuthContext)

    let auth = false


    useLayoutEffect(() =>{
        if (user){
            auth = true
        } else {
            if(token){
                getUserData();
            } else {
                auth = false
            }
        }
    },[user,token]);

    return( 
        token && auth ? <Outlet/> :
         token ? 
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