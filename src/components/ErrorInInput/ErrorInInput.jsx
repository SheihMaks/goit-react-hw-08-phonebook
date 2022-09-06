import { ErrorInInputContainer, ErrorText } from "./ErrorInInput.styled";

export const ErrorInInput=({errorMessage})=>{
    return(<ErrorInInputContainer>
        <ErrorText>{errorMessage}</ErrorText>
    </ErrorInInputContainer>)
}