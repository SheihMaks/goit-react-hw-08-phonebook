import { useState } from "react"
import { FormContainer,Form,LabelForLogInForm,InputLogInForm,NameInput } from "./LogInPage.styled";
import { Button } from "components/Buttons/ButtonLogInAndRegistration/Button";
import { useLogInMutation,  } from "components/Redux/FetchUser"
import { nanoid } from "nanoid"
import { useSelector } from "react-redux"
import { authSelectors } from "components/Redux/sliceAuth"
import { ErrorInInput } from "components/ErrorInInput/ErrorInInput"

const LoginPage=()=>{
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[error,setError]=useState(false)
const [logIn]=useLogInMutation();
const emailId=nanoid()
const passwordId=nanoid()

const rejected=useSelector(authSelectors.getErrorServer)

const onHandleInput=(e)=>{
    const{name,value}=e.currentTarget
    switch(name){
        case 'email':setEmail(value)
        break;
        case 'password':setPassword(value)
        break;
        default:window.alert('Такой тип ввода не обрабатывается')
    }

}

const formHandleSubmit=(e)=>{
    e.preventDefault()
    setError(false)
    if (email.trim()==='' || password.trim()===''){
        setError(true)
        return
    }  
    logIn({email,password})
    resetState()
}

const resetState=()=>{
    setEmail('')
    setPassword('')
}

return(<FormContainer>
<Form onSubmit={formHandleSubmit}>
<LabelForLogInForm><NameInput>Email:</NameInput>
<InputLogInForm
name='email'
type='text'
onChange={onHandleInput}
value={email}
id={emailId}
placeholder='Enter your email'
/></LabelForLogInForm>
<LabelForLogInForm><NameInput>Password:</NameInput>
<InputLogInForm
name='password'
type='text'
onChange={onHandleInput}
value={password}
id={passwordId}
placeholder='Enter your password'

/></LabelForLogInForm>
{(error || rejected) && <ErrorInInput errorMessage='Invalid Email or password'/>}
<Button buttonText="Log In"/>
</Form>
</FormContainer>)
}

export default LoginPage