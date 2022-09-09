import React from "react";
import {PhonebookApp, HeaderApp, HeaderSectionContacts} from './PhoneBookPage.styled'
import { ContactForm } from "components/PhoneContactForm/ContactForm";
import {Contacts} from 'components/Contacts/Contacts';
import { Filter } from "components/UserFilter/Filter";
import {useGetContactsQuery} from 'components/Redux/fetchContacts';
import { Spinner } from "components/Spinner/Spinner";

export const PhoneBookPage=()=>{
  
  const {data:contacts,isFetching}=useGetContactsQuery();
  
  return (<PhonebookApp>
      <HeaderApp>Phonebook</HeaderApp>
      <ContactForm 
      contactsList={contacts}
      />
      <HeaderSectionContacts>Contacts</HeaderSectionContacts>
      <Filter 
      title='Find contacts by name'
      />
      {isFetching && <Spinner/>}
      {contacts && <Contacts
      contacts={contacts}/>}
    </PhonebookApp>)
  }