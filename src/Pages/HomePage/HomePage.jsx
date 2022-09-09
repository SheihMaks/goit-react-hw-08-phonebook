import { useSelector } from "react-redux"
import { authSelectors } from "components/Redux/sliceAuth"
import { HomePageContainer, HomePageStartText } from "./HomePage.styled"


export const HomePage=()=>{
    const isLogged=useSelector(authSelectors.getIsLoggedIn)
    return(
        <HomePageContainer>
            <HomePageStartText>To continue using the application, you need to register or log in</HomePageStartText>
        </HomePageContainer>
    )
}