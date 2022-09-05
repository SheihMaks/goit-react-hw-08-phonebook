import { useState } from "react"
import { FormContainer,Form,LabelForLogInForm,InputLogInForm } from "./LogInPage.styled"
import { useLogInMutation,  } from "components/Redux/FetchUser"
import { nanoid } from "nanoid"
import { useSelector } from "react-redux"
import { authSelectors } from "components/Redux/sliceAuth"

export const LoginPage=()=>{
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const [logIn]=useLogInMutation();
const emailId=nanoid()
const passwordId=nanoid()

const isLogged=useSelector(authSelectors.getIsLoggedIn)
// const getCurrentUser=useGetCurrentUserQuery()
console.log(isLogged)

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
    console.log({email,password})
    logIn({email,password})
    resetState()
}

const resetState=()=>{
    setEmail('')
    setPassword('')
}

return(<FormContainer>
<Form onSubmit={formHandleSubmit}>
<LabelForLogInForm htmlFor={emailId}>Email</LabelForLogInForm>
<InputLogInForm
name='email'
type='text'
onChange={onHandleInput}
value={email}
id={emailId}
/>
<LabelForLogInForm htmlFor={passwordId}>Password</LabelForLogInForm>
<InputLogInForm
name='password'
type='text'
onChange={onHandleInput}
value={password}
id={passwordId}
/>
<button type='submit'>Log in</button>
</Form>
</FormContainer>)
}