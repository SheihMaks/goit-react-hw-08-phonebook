import { AuthNavContainer, AuthNavLink } from "./AuthNav.styled"

export const AuthNav=()=>{
    return(<AuthNavContainer>
        <AuthNavLink to='/register'>Регистрация</AuthNavLink>
        <AuthNavLink to='/login'>Войти</AuthNavLink>
    </AuthNavContainer>)
}