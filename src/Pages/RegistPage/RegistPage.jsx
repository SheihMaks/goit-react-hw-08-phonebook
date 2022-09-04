import { useState } from "react";
import { nanoid } from "nanoid";
import { RegistFormContainer,FormRegist,LabelForRegistrationForm,InputRegistrationForm } from "./RegistPage.styled";
import { useRegistrationNewUserMutation } from "components/Redux/FetchUser";

export const RegistPage=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [registrationNewUser]=useRegistrationNewUserMutation()
    const nameId=nanoid()
    const emailId=nanoid()
    const passwordId=nanoid()

    

    const onHandleInput=(e)=>{
        const{name,value}=e.currentTarget
        switch(name){
            case 'name':setName(value)
            break;
            case 'email':setEmail(value)
            break;
            case 'password':setPassword(value)
            break;
            default:window.alert('Такой тип ввода не обрабатывается')
            }
        }
        const FormHandleSubmit=(e)=>{
            e.preventDefault()
            registrationNewUser({name,email,password})
            resetState()
        }

        const resetState=()=>{
            setName('');
            setEmail('');
            setPassword('')
        }
    
    return(<RegistFormContainer>
        <FormRegist onSubmit={FormHandleSubmit}>
<LabelForRegistrationForm htmlFor={nameId}>Enter your name</LabelForRegistrationForm>
<InputRegistrationForm
name='name'
type='text'
value={name}
id={nameId}
onChange={onHandleInput}
/>
<LabelForRegistrationForm htmlFor={emailId}>Enter your email</LabelForRegistrationForm>
<InputRegistrationForm
name='email'
type='text'
value={email}
id={emailId}
onChange={onHandleInput}
/>
<LabelForRegistrationForm htmlFor={passwordId}>Enter your password</LabelForRegistrationForm>
<InputRegistrationForm
name='password'
type='text'
value={password}
id={passwordId}
onChange={onHandleInput}
/>
<button type='submit'>Register</button>
        </FormRegist>
    </RegistFormContainer>
    )
}