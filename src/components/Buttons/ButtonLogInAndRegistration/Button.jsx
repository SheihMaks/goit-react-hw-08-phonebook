import PropTypes from 'prop-types';
import { ButtonLogAndRegForm } from "./Button.styled";

export const Button=({buttonText})=>{
return(<ButtonLogAndRegForm type='submit'>{buttonText}</ButtonLogAndRegForm>)}

Button.propTypes={
    buttonText: PropTypes.string.isRequired,
}