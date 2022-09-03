import { useState } from "react"
import { FormContainer,Form,LabelForEmail, LabelForPassword } from "./LogInPage.styled"
import { useLogInMutation } from "components/Redux/FetchUser"
import { nanoid } from "nanoid"

export const LoginPage=()=>{
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const [logIn]=useLogInMutation();
const emailId=nanoid()
const passwordId=nanoid()

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
<LabelForEmail htmlFor={emailId}>Enter your Email</LabelForEmail>
<input
name='email'
type='text'
onChange={onHandleInput}
value={email}
id={emailId}
/>
<LabelForPassword htmlFor={passwordId}>Enter your password</LabelForPassword>
<input
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