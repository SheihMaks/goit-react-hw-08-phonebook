import { useDispatch, useSelector } from "react-redux";
import { ContainerUserMenu, UserMenuText } from "./UserMenu.styled";
import { authSelectors } from "components/Redux/sliceAuth";

export const UserMenu=()=>{
    const{getUserName}=authSelectors
    const dispatch=useDispatch()
    const userName=useSelector(getUserName)
    return(<ContainerUserMenu>
        <UserMenuText>Добро пожаловать, {userName}</UserMenuText>
        {/* <button type='button' onClick={()=>dispatch(logOutUser())}>Выйти</button> */}
    </ContainerUserMenu>

    )
}