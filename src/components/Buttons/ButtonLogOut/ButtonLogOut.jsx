import { ButtonLogout,ExitIcon } from "./ButtonLogOut.styled"
import exit from 'img/exit.png'
import { useLogOutMutation } from "components/Redux/FetchUser";
import { useSelector } from "react-redux";
import { authSelectors } from "components/Redux/sliceAuth";

export const ButtonLogOut=()=>{
    const {getLoadStatus}=authSelectors;
    const load=useSelector(getLoadStatus)
    const [logOut]=useLogOutMutation()

    return(<ButtonLogout type='button' onClick={()=>logOut()} disabled={load}><ExitIcon src={exit} alt='Exit'/></ButtonLogout>)
}