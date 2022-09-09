import { RotatingLines } from  'react-loader-spinner'
import { SpinnerContainer } from './Spinner.styled';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Spinner=()=>{
return(<SpinnerContainer>
<RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/></SpinnerContainer>)
}