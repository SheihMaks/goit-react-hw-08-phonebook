import PropTypes from 'prop-types';
import { useState } from "react";
import { ContactListItem,ContactContainer,Span,ContainerButtonsItem,DeleteItemButton,EditItemButton } from "./ContactItem.styled"
import { useDeleteContactMutation } from 'components/Redux/fetchContacts';

export const ContactItem=({name,number,id})=>{
    // const[editableItemId,setEditableItemId]=useState(null)
    // const[editableItemName,setEditableItemName]=useState(name)
    // const[editableItemNumber,setEditableItemNumber]=useState(number)
    // const[edit,setEdit]=useState(false)

    const [deleteContact]=useDeleteContactMutation()

    return(<ContactListItem>
        {/* <ContactContainer> */}
            <Span>{name}: {number}</Span>
    <ContainerButtonsItem>
    <EditItemButton>Edit</EditItemButton>
    <DeleteItemButton type='button' onClick={()=>deleteContact(id)}>Delete</DeleteItemButton>
    </ContainerButtonsItem>
    {/* </ContactContainer> */}
    </ContactListItem>)
}

ContactItem.propTypes={
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
}