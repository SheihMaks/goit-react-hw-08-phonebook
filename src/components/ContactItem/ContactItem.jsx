import PropTypes from 'prop-types';
import { useState } from "react";
import { nanoid } from 'nanoid';
import { ContactListItem,ContactContainer,Span,ContainerInputForEdit,InputForEdit,ContainerButtonsItem,DeleteItemButton,EditItemButton } from "./ContactItem.styled"
import { useDeleteContactMutation } from 'components/Redux/fetchContacts';
import { useEditContactMutation } from 'components/Redux/fetchContacts';

export const ContactItem=({name,number,id})=>{
    const[editableItemName,setEditableItemName]=useState(name);
    const[editableItemNumber,setEditableItemNumber]=useState(number);
    const[edit,setEdit]=useState(false);
    const nameId=nanoid();
    const numberId=nanoid();
    const [deleteContact]=useDeleteContactMutation();
    const [editContact]=useEditContactMutation();

    const onEditInput=(e)=>{
        const{name,value}=e.currentTarget;
        switch (name){
            case 'editableItemName': setEditableItemName(value)
            break;
            case 'editableItemNumber': setEditableItemNumber(value)
            break;
            default:window.alert('Такой тип ввода не обрабатывается')
        }
    };

    const saveEditedContact=()=>{
        setEdit(false)
        if(name===editableItemName && number===editableItemNumber){
            return
        }
        editContact({name:editableItemName,number:editableItemNumber,id})
        
    };
    
    return(<ContactListItem>
    {edit ? 
    <ContainerInputForEdit>
        <InputForEdit name='editableItemName' type='text' value={editableItemName} onChange={onEditInput} id={nameId} />
        <InputForEdit name='editableItemNumber' type='text' value={editableItemNumber} onChange={onEditInput} id={numberId}/>
    </ContainerInputForEdit> :
    <ContactContainer>
        <Span>{name}: {number}</Span>
    </ContactContainer>}
    <ContainerButtonsItem>
    <EditItemButton type='button' 
    onClick={ !edit ? ()=>setEdit(true) : saveEditedContact}>{!edit ? 'Edit' : 'Save'}</EditItemButton>
    <DeleteItemButton type='button' 
    onClick={()=>deleteContact(id)}>Delete</DeleteItemButton>
    </ContainerButtonsItem>
    </ContactListItem>)
}

ContactItem.propTypes={
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
}