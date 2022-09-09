import { useState } from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "components/Redux/sliceAuth";
import { nanoid } from "nanoid";
import { RegistFormContainer,FormRegist,LabelForRegistrationForm,NameInput,InputRegistrationForm } from "./RegistPage.styled";
import { Button } from "components/Buttons/ButtonLogInAndRegistration/Button";
import { useRegistrationNewUserMutation } from "components/Redux/FetchUser";
import { ErrorInInput } from "components/ErrorInInput/ErrorInInput";

export const RegistPage=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errorForm,setErrorForm]=useState(false)
    const rejectedRegistration=useSelector(authSelectors.getErrorRegistration)
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
            setErrorForm(false)
            if(name.trim()==='' || email.trim()==='' || password.trim()===''){
                setErrorForm(true)
                return
            }
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
<LabelForRegistrationForm><NameInput>Name:</NameInput>
<InputRegistrationForm
name='name'
type='text'
value={name}
id={nameId}
onChange={onHandleInput}
placeholder='Enter your name'
/></LabelForRegistrationForm>
<LabelForRegistrationForm><NameInput>Email:</NameInput>
<InputRegistrationForm
name='email'
type='email'
value={email}
id={emailId}
onChange={onHandleInput}
placeholder='Enter your email'
/></LabelForRegistrationForm>
<LabelForRegistrationForm><NameInput>Password:</NameInput>
<InputRegistrationForm
name='password'
type='text'
value={password}
id={passwordId}
onChange={onHandleInput}
placeholder='Enter your password'
/></LabelForRegistrationForm>
{errorForm && <ErrorInInput errorMessage='Please fill in all input fields'/>}
{rejectedRegistration && <ErrorInInput errorMessage='Invalid Email or password'/>}
<Button buttonText="Register"/>
</FormRegist>
</RegistFormContainer>
    )
}