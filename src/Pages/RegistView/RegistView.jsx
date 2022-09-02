import { useState } from "react";
import { nanoid } from "nanoid";
import { RegistViewContainer,FormRegist,LabelForName,LabelForEmail,LabelForPassword } from "./RegistView.styled";

export const RegistView=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const nameId=nanoid()
    const emailId=nanoid()
    const passwordId=nanoid()

    const formHandleSubmit=(data)=>{
        data={
            name:data.name,
            email:data.email,
            password:data.password,
            id:nanoid(),
        }
    }

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
        const onHandleSubmit=(e)=>{
            e.preventDefault()
            formHandleSubmit({name,email,password})
        }
    
    return(<RegistViewContainer>
        <FormRegist onSubmit={onHandleSubmit}>
<LabelForName htmlFor={nameId}>Enter your name</LabelForName>
<input
name='name'
type='text'
value={name}
id={nameId}
onChange={onHandleInput}
/>
<LabelForEmail htmlFor={emailId}>Enter your email</LabelForEmail>
<input
name='email'
type='text'
value={email}
id={emailId}
onChange={onHandleInput}
/>
<LabelForPassword htmlFor={passwordId}>Enter your password</LabelForPassword>
<input
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