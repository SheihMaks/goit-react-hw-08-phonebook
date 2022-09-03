import { useState } from "react";
import { nanoid } from "nanoid";
import { RegistViewContainer,FormRegist,LabelForName,LabelForEmail,LabelForPassword,InputRegistrationForm } from "./RegistPage.styled";

export const RegistPage=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
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
            
            resetState()
        }

        const resetState=()=>{
            setName('');
            setEmail('');
            setPassword('')
        }
    
    return(<RegistViewContainer>
        <FormRegist onSubmit={FormHandleSubmit}>
<LabelForName htmlFor={nameId}>Enter your name</LabelForName>
<InputRegistrationForm
name='name'
type='text'
value={name}
id={nameId}
onChange={onHandleInput}
/>
<LabelForEmail htmlFor={emailId}>Enter your email</LabelForEmail>
<InputRegistrationForm
name='email'
type='text'
value={email}
id={emailId}
onChange={onHandleInput}
/>
<LabelForPassword htmlFor={passwordId}>Enter your password</LabelForPassword>
<InputRegistrationForm
name='password'
type='text'
value={password}
id={passwordId}
onChange={onHandleInput}
/>
<button type='submit'>Register</button>
        </FormRegist>
    </RegistViewContainer>
    )
}