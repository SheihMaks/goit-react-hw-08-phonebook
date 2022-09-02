import { useSelector } from "react-redux";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/auth/AuthNav";
import { HeaderContainer,NavLinkStyled,LinksContainer } from "./Header.styled"

export const Header=()=>{
    return(<HeaderContainer>
        <LinksContainer>
        <NavLinkStyled to='/'>Главная</NavLinkStyled>
        <NavLinkStyled to='contacts'>Контакты</NavLinkStyled>
        {isLogin ? <UserMenu/> : <AuthNav/>}
        </LinksContainer>
    </HeaderContainer>

    )
}