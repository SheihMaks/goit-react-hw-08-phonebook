import { useDispatch, useSelector } from "react-redux";
import { ContainerUserMenu, UserMenuText } from "./UserMenu.styled";

export const UserMenu=()=>{
    const dispatch=useDispatch()
    const userName=useSelector(getUserName)
    return(<ContainerUserMenu>
        <UserMenuText>Добро пожаловать, {userName}</UserMenuText>
        <button type='button' onClick={()=>dispatch(logOutUser())}>LogOut</button>
    </ContainerUserMenu>

    )
}