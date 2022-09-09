import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "components/Redux/sliceAuth";

export const PublicRoute=({restricted=false,redirectTo='/', component:Component,})=>{
    const {getIsLoggedIn}=authSelectors;
    const isLogged=useSelector(getIsLoggedIn);
    const redirect=isLogged && restricted;
    return redirect ? <Navigate to={redirectTo}/> : Component;
    
}