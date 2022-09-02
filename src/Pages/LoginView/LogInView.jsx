import { useState } from "react"
import { FormContainer,Form,LabelForEmail, LabelForPassword } from "./LogInView.styled"
import { nanoid } from "nanoid"
export const LoginView=()=>{
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const emailId=nanoid()
const passwordId=nanoid()

const formHandleSubmit=(data)=>{
    data={
        email:data.email,
        password:data.password,
        id:nanoid(),
    }


}

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

const onHandleSubmit=(e)=>{
    e.preventDefault()
    formHandleSubmit({email,password})
}

return(<FormContainer>
<Form onSubmit={onHandleSubmit}>
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