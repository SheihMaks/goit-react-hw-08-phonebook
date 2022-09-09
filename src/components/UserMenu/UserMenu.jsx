import {  useSelector } from "react-redux";
import { Avatar, ContainerUserMenu, UserMenuText } from "./UserMenu.styled";
import { ButtonLogOut } from "components/Buttons/ButtonLogOut/ButtonLogOut";
import { authSelectors } from "components/Redux/sliceAuth";
import defaultAvatar from 'img/defaultAvatar.png'

export const UserMenu=()=>{
    const{getUserName}=authSelectors
    const userName=useSelector(getUserName)
    
    return(<ContainerUserMenu>
        <Avatar src={defaultAvatar} alt='avatar'/>
        <UserMenuText>Welcome, {userName}</UserMenuText>
        <ButtonLogOut/>
    </ContainerUserMenu>)
}