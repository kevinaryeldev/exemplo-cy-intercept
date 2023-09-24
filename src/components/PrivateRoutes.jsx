import { useContext, useLayoutEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoutes = () => {

    const {getUserData,token,user} = useContext(AuthContext)
    let auth = true

    useLayoutEffect(async ()=>{
        if (user){
            return
        } else{
            if(token){
                await getUserData();
                user? auth=true :auth = false
            }else{
                auth = false
            }
        }
    });

    return( 
        auth ? <Outlet/> : <Navigate to={"/"}/>
    )
}

export default PrivateRoutes;