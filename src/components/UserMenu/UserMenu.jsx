import { useDispatch, useSelector } from "react-redux";
import { Avatar, ContainerUserMenu, UserMenuText } from "./UserMenu.styled";
import { authSelectors } from "components/Redux/sliceAuth";
import defaultAvatar from 'img/defaultAvatar.png'

export const UserMenu=()=>{
    const{getUserName}=authSelectors
    const dispatch=useDispatch()
    const userName=useSelector(getUserName)
    return(<ContainerUserMenu>
        <Avatar src={defaultAvatar} alt='avatar'/>
        <UserMenuText>Добро пожаловать, {userName}</UserMenuText>
        {/* <button type='button' onClick={()=>dispatch(logOutUser())}>Выйти</button> */}
    </ContainerUserMenu>

    )
}