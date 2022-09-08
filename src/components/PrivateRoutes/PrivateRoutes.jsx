import { useSelector } from "react-redux";
import { authSelectors } from "components/Redux/sliceAuth";
import { Navigate,Outlet } from "react-router-dom";

export const PrivateRoutes=()=>{
    const {getToken}=authSelectors;
    const token=useSelector(getToken);
return token ? <Outlet/> : <Navigate to='/' replace/>
}