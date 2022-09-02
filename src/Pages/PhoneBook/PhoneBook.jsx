import React from "react";
import {PhonebookApp, HeaderApp, HeaderSectionContacts} from './PhoneBook.styled'
import { ContactForm } from "components/PhoneContactForm/ContactForm";
import {Contacts} from 'components/Contacts/Contacts';
import { Filter } from "components/UserFilter/Filter";
import {useGetContactsQuery} from 'components/Redux/fetchContacts';

export const PhoneBook=()=>{
  
  const {data:contacts}=useGetContactsQuery();
  
  return (<PhonebookApp>
      <HeaderApp>Phonebook</HeaderApp>
      <ContactForm 
      contactsList={contacts}
      />
      <HeaderSectionContacts>Contacts</HeaderSectionContacts>
      <Filter 
      title='Find contacts by name'
      />
      {contacts && <Contacts
      contacts={contacts}/>}
    </PhonebookApp>)
  }