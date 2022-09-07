import { ButtonLogout,ExitIcon } from "./ButtonLogOut.styled"
import exit from 'img/exit.png'
import { useLogOutMutation } from "components/Redux/FetchUser";

export const ButtonLogOut=()=>{
    
    const [logOut]=useLogOutMutation()

    return(<ButtonLogout type='button' onClick={()=>logOut()}><ExitIcon src={exit} alt='Exit'/></ButtonLogout>)
}