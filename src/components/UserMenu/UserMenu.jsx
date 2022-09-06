import {  useSelector } from "react-redux";
import { Avatar, ContainerUserMenu, UserMenuText } from "./UserMenu.styled";
import { authSelectors } from "components/Redux/sliceAuth";
import defaultAvatar from 'img/defaultAvatar.png'
import { useLogOutMutation } from "components/Redux/FetchUser";

export const UserMenu=()=>{
    const{getUserName}=authSelectors
    const userName=useSelector(getUserName)
    const [logOut]=useLogOutMutation()
    return(<ContainerUserMenu>
        <Avatar src={defaultAvatar} alt='avatar'/>
        <UserMenuText>Welcome, {userName}</UserMenuText>
        <button type='button' onClick={()=>logOut()}>Выйти</button>
    </ContainerUserMenu>

    )
}