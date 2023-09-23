import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    let auth = localStorage.getItem("auth");
    return( 
        auth ? <Outlet/> : <Navigate to={"/"}/>
    )
}

export default PrivateRoutes;