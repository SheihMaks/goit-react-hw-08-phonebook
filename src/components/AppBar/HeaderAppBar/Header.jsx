import { useSelector } from "react-redux";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/auth/AuthNav";
import { HeaderContainer,NavLinkStyled,LinksContainer } from "./Header.styled"
import { authSelectors } from "components/Redux/sliceAuth";

export const Header=()=>{
    const{getIsLoggedIn}=authSelectors
    const isLogged=useSelector(getIsLoggedIn)
    return(<HeaderContainer>
        <LinksContainer>
        <NavLinkStyled to='/'>Главная</NavLinkStyled>
        <NavLinkStyled to='contacts'>Контакты</NavLinkStyled>
        {isLogged ? <UserMenu/> : <AuthNav/>}
        </LinksContainer>
    </HeaderContainer>

    )
}