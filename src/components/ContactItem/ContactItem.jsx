import { ContactListItem,Span,ContainerButtonsItem,DeleteItemButton,EditItemButton } from "./ContactItem.styled"
import { useDeleteContactMutation } from 'components/Redux/fetchContacts';

export const ContactItem=({contact})=>{
    const [deleteContact]=useDeleteContactMutation()

    return(<ContactListItem><Span>{contact.name}: {contact.number}</Span>
    <ContainerButtonsItem>
    <EditItemButton>Edit</EditItemButton>
    <DeleteItemButton type='button' onClick={()=>deleteContact(contact.id)}>Delete</DeleteItemButton></ContainerButtonsItem>
    </ContactListItem>)
}