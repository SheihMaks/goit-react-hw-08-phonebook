import PropTypes from 'prop-types';
import { ErrorInInputContainer, ErrorText } from "./ErrorInInput.styled";

export const ErrorInInput=({errorMessage})=>{
    return(<ErrorInInputContainer>
        <ErrorText>{errorMessage}</ErrorText>
    </ErrorInInputContainer>)
}

ErrorInInput.propTypes={
    errorMessage:PropTypes.string.isRequired,
}