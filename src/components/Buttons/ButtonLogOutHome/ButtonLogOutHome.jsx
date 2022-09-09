import { useSelector } from "react-redux";
import { authSelectors } from "components/Redux/sliceAuth";
import { useLogOutMutation } from "components/Redux/FetchUser";
import { LogOutFromAccount } from "./ButtonLogOutHome.styled";

export const ButtonLogOutHome=()=>{
    const {getLoadStatus}=authSelectors;
    const load=useSelector(getLoadStatus)
    const [logOut]=useLogOutMutation()

    return(<LogOutFromAccount onClick={()=>logOut()} disabled={load}>LogOut</LogOutFromAccount>)
}