import { AuthNavContainer, AuthNavLink } from "./AuthNav.styled"

export const AuthNav=()=>{
    return(<AuthNavContainer>
        <AuthNavLink to='users/signUp'>Регистрация</AuthNavLink>
        <AuthNavLink to='users/login'>Войти</AuthNavLink>
    </AuthNavContainer>
        
    )
}