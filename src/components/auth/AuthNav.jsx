import { AuthNavContainer, AuthNavLink } from "./AuthNav.styled"

export const AuthNav=()=>{
    return(<AuthNavContainer>
        <AuthNavLink to='/register'>SignUp</AuthNavLink>
        <AuthNavLink to='/login'>LogIn</AuthNavLink>
    </AuthNavContainer>)
}