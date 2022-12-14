import { useSelector } from "react-redux"
import { authSelectors } from "components/Redux/sliceAuth"
import { ButtonLogOutHome } from "components/Buttons/ButtonLogOutHome/ButtonLogOutHome"
import { HomePageContainer,GreetingLoggedUser,HomePageTextIfLogged,HomePageTextAccount,AuthNavLinkHome } from "./HomePage.styled"


const HomePage=()=>{
    
    const isLogged=useSelector(authSelectors.getIsLoggedIn)
    const userName=useSelector(authSelectors.getUserName)
    return(
        <HomePageContainer>
            {isLogged ? <><GreetingLoggedUser>Hello, {userName}!</GreetingLoggedUser>
            <HomePageTextIfLogged>You are in PhoneBookApp</HomePageTextIfLogged>
            <HomePageTextAccount>If you want to leave your account, click here <ButtonLogOutHome/></HomePageTextAccount>
            </> 
            : 
            <><GreetingLoggedUser>Hello, User!</GreetingLoggedUser>
            <HomePageTextIfLogged>You are in PhoneBookApp</HomePageTextIfLogged>
            <HomePageTextAccount>To sign in to your account, click here <AuthNavLinkHome to='/register'>SignUp</AuthNavLinkHome></HomePageTextAccount>
            <HomePageTextAccount>To sign in to your account, click here <AuthNavLinkHome to='/login'>LogIn</AuthNavLinkHome></HomePageTextAccount></>}
            </HomePageContainer>
    )
}

export default HomePage